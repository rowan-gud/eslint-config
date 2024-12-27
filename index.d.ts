import type { ConfigArray } from 'typescript-eslint';

declare module './index.js' {
  export interface ConfigOptions {
    additionalTestPatterns: string[];
    rootDir: string;
    strict: boolean;
  }

  export function config(options?: Partial<ConfigOptions>): ConfigArray;
}
