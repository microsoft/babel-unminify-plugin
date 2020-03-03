/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { minify } from 'terser';

let grep = '';
const gIndex = process.argv.indexOf('-g')
if (gIndex !== -1) {
  grep = process.argv[gIndex + 1];
}

const pluginTester = require('babel-plugin-tester').default;

const enum Suffix {
  Original = '.original.js',
  PreMinified = '.premin.js',
  Minified = '.min.js',
  Actual = '.actual.js',
  Expected = '.expected.js',
}

const tests: {
  formatResult: (code: string) => void;
  title: string;
  code: string;
  output: string;
  only?: boolean;
}[] = [];

const dir = join(__dirname, '..', 'fixtures');
const normalize = (str: string) => str.replace(/\r?\n/g, '\n').trim() + '\n';

for (const file of readdirSync(dir)) {
  let unsuffixed: string;
  let minified: string;
  let maybeExpected: string;
  if (file.endsWith(Suffix.Original)) {
    unsuffixed = file.slice(0, -Suffix.Original.length);
    maybeExpected = normalize(readFileSync(join(dir, file), 'utf-8'));
    minified = minify(maybeExpected, { compress: true }).code!;
  } else if (file.endsWith(Suffix.PreMinified)) {
    unsuffixed = file.slice(0, -Suffix.PreMinified.length);
    minified = normalize(readFileSync(join(dir, file), 'utf-8'));
    maybeExpected = `unknown, create a ${unsuffixed}${Suffix.Expected} file`;
  } else {
    continue;
  }


  const expectedFile = join(dir, unsuffixed + Suffix.Expected);
  const expected =  existsSync(expectedFile)
    ? normalize(readFileSync(expectedFile, 'utf-8'))
    : maybeExpected;

  tests.push({
    formatResult: code => {
      code = normalize(code);
      if (code !== expected) {
        writeFileSync(join(dir, unsuffixed + Suffix.Actual), code);
      }

      writeFileSync(join(dir, unsuffixed + Suffix.Minified), minified);
      return code;
    },
    only: !!grep && unsuffixed.includes(grep),
    title: unsuffixed,
    code: minified,
    output: expected,
  });
}

pluginTester({
  plugin: require('./'),
  tests,
});
