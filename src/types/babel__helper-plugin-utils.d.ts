declare module '@babel/helper-plugin-utils' {
  import { PluginObj } from '@babel/core';
  export function declare<S>(fn: (api: unknown, options: S) => PluginObj<S>): void;
}
