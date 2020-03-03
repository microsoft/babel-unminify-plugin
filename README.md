# babel-unminify-plugin

A small Babel plugin that unminifies compressed source code. Used in the VS Code JavaScript debugger.

## Why write this?

We wanted a beautifier to support pretty-printing for the debug adapter in VS Code. [js-beautify](https://github.com/beautify-web/js-beautify) is sort of the de-facto unminifier for JavaScript, but it doesn't generate sourcemaps, which we very heavily rely on. We rigged a rather ad-hoc sourcemap implementation onto it, but it was buggy.

Ultimately we needed a code generator that could create reasonably readable output from an AST on which we could run some basic demangling procedures. After some investigation, we found Babel to be the fastest tool that fit these needs. This repo contains a simple plugin for Babel that implements the demangling.

## Options

- `enableStructuralChanges: boolean` If set to true (default), it unminifies code even if doing so would cause a runtime change in the program--for example, splitting joined sequence expressions into separate statements.

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
