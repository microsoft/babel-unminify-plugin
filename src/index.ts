/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { declare } from '@babel/helper-plugin-utils';
import { types as t, Node, NodePath } from '@babel/core';

export interface IConfig {
  /**
   * Disables structural changes in the program which would cause a mismatch
   * between code being evaluated and the unminified code.
   */
  enableStructuralChanges?: boolean;
}

/**
 * Runs a function in `parentNode` if it's a block, or a statement that can
 * contain a block.
 */
const replaceAsBlockChild = (pathToReplace: NodePath<Node>, nodeToAdd: t.Statement) => {
  const parent = pathToReplace.parent;
  if (t.isBlockParent(parent) && !t.isBlock(parent)) {
    pathToReplace.replaceWith(t.blockStatement([nodeToAdd]));
  } else {
    pathToReplace.replaceWith(nodeToAdd);
  }
};

/**
 * Makes the "body" in the node a block statement, if it isn't already.
 */
const ensureBodyBlock = (node: Node & { body: t.Statement }) => {
  node.body = ensureIsBlock(node.body);
};

/**
 * Makes the statement a block statement, if it isn't already.
 */
const ensureIsBlock = <T extends t.Statement>(node: T): T | t.BlockStatement =>
  t.isBlock(node) ? node : t.blockStatement([node]);

module.exports = declare<IConfig>((_api, { enableStructuralChanges = true }) => ({
  name: 'babel-unminify-plugin',
  visitor: {
    VariableDeclaration(path) {
      const node = path.node;
      // Decompress multiple variable declarations `let a=1,b=2;` into single statements.
      if (enableStructuralChanges && node.declarations.length > 1 && t.isBlock(path.parent)) {
        path.replaceWithMultiple(
          node.declarations.map(declarator => t.variableDeclaration(node.kind, [declarator])),
        );
      }
    },

    /**
     * Decompress shorthand `!0` or `!1` for true and false.
     */
    UnaryExpression(path) {
      // Decompress shorthand `!0` or `!1` for true and false.
      const node = path.node;
      if (node.operator === '!' && t.isNumericLiteral(node.argument)) {
        path.replaceWith(t.booleanLiteral(!node.argument.value));
      }

      // Decompress `void X` => undefined. Void evaluates whatever's after it,
      // so if it's not a literal insert it before this expression.
      if (node.operator === 'void') {
        if (!t.isLiteral(node.argument)) {
          path.getStatementParent()?.insertBefore(node.argument);
        }

        path.replaceWith(t.identifier('undefined'));
      }
    },

    SequenceExpression(path) {
      const node = path.node;
      const parent = path.getStatementParent();

      // Decompress sequence expressions, like `return a=[],a.push(1),a.unshift(2)`
      if (enableStructuralChanges && node.expressions.length > 1 && parent) {
        for (let i = 0; i < node.expressions.length - 1; i++) {
          parent.insertBefore(t.expressionStatement(node.expressions[i]));
        }

        path.replaceWith(node.expressions[node.expressions.length - 1]);
      }
    },

    LogicalExpression(path) {
      const node = path.node;
      const parent = path.parent;

      // Decompress `foo && bar()` to `if (foo) bar()`
      if (enableStructuralChanges && t.isExpressionStatement(parent)) {
        if (node.operator === '&&') {
          path.parentPath.replaceWith(
            t.ifStatement(node.left, t.blockStatement([t.expressionStatement(node.right)])),
          );
        } else if (node.operator === '||') {
          path.parentPath.replaceWith(
            t.ifStatement(
              t.unaryExpression('!', node.left),
              t.blockStatement([t.expressionStatement(node.right)]),
            ),
          );
        }
      }
    },

    ConditionalExpression(path) {
      const node = path.node;

      // Decompress embedded ternaries to if {} else {} blocks
      if (
        enableStructuralChanges &&
        t.isExpressionStatement(path.parent) &&
        t.isBlockParent(path.parentPath.parent)
      ) {
        replaceAsBlockChild(
          path.parentPath,
          t.ifStatement(
            node.test,
            t.blockStatement([t.expressionStatement(node.consequent)]),
            t.blockStatement([t.expressionStatement(node.alternate)]),
          ),
        );
      }
    },

    // Ensure the bodies of block parents are blocks, since the formatting
    // looks quite ugly if this isn't the case.
    ForStatement: path => ensureBodyBlock(path.node),
    ForInStatement: path => ensureBodyBlock(path.node),
    DoWhileStatement: path => ensureBodyBlock(path.node),
    WhileStatement: path => ensureBodyBlock(path.node),
    WithStatement: path => ensureBodyBlock(path.node),
    ForOfStatement: path => ensureBodyBlock(path.node),
    IfStatement: path => {
      path.node.consequent = ensureIsBlock(path.node.consequent);
      if (path.node.alternate) {
        path.node.alternate = ensureIsBlock(path.node.alternate);
      }
    },
  },
}));
