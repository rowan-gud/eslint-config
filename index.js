import vitest from '@vitest/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * Get the ESLint flat configuration.
 *
 * @param {ConfigOptions} options The configuration options.
 * @returns {tseslint.ConfigArray} The ESLint configuration.
 */
export function config({
  additionalTestPatterns = [],
  rootDir = process.cwd(),
  strict = false,
} = {}) {
  const warn = warnFn.bind(null, strict);

  return tseslint.config(
    {
      ignores: ['node_modules/', 'dist/', 'docs/', 'examples/'],
    },
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },
    {
      files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',
        '**/*.cjs',
        '**/*.ts',
        '**/*.tsx',
        '**/*.d.ts',
        '**/*.mts',
      ],
      plugins: {
        jsdoc,
        perfectionist,
      },
      rules: {
        'array-callback-return': error(),
        'block-scoped-var': error(),
        'constructor-super': error(),
        curly: error('all'),
        'default-param-last': error(),
        'dot-notation': error(),
        eqeqeq: error('always'),
        'for-direction': error(),
        'getter-return': error(),
        'no-async-promise-executor': error(),
        'no-await-in-loop': warn(),
        'no-case-declarations': error(),
        'no-class-assign': error(),
        'no-compare-neg-zero': error(),
        'no-cond-assign': error(),
        'no-const-assign': error(),
        'no-constant-binary-expression': error(),
        'no-constant-condition': error(),
        'no-constructor-return': error(),
        'no-control-regex': error(),
        'no-debugger': error(),
        'no-delete-var': error(),
        'no-dupe-args': error(),
        'no-dupe-class-members': error(),
        'no-dupe-else-if': error(),
        'no-dupe-keys': error(),
        'no-duplicate-case': error(),
        'no-empty': error(),
        'no-empty-character-class': error(),
        'no-empty-pattern': error(),
        'no-empty-static-block': error(),
        'no-ex-assign': error(),
        'no-extra-boolean-cast': error(),
        'no-fallthrough': error(),
        'no-func-assign': error(),
        'no-global-assign': error(),
        'no-import-assign': error(),
        'no-invalid-regexp': error(),
        'no-irregular-whitespace': error(),
        'no-lonely-if': error(),
        'no-loss-of-precision': error(),
        'no-misleading-character-class': error(),
        'no-new-native-nonconstructor': error(),
        'no-nonoctal-decimal-escape': error(),
        'no-obj-calls': error(),
        'no-octal': error(),
        'no-promise-executor-return': error(),
        'no-prototype-builtins': error(),
        'no-redeclare': error(),
        'no-regex-spaces': error(),
        'no-self-assign': error(),
        'no-setter-return': error(),
        'no-shadow-restricted-names': error(),
        'no-sparse-arrays': error(),
        'no-this-before-super': error(),
        'no-undef': error(),
        'no-unexpected-multiline': error(),
        'no-unreachable': error(),
        'no-unsafe-finally': error(),
        'no-unsafe-negation': error(),
        'no-unsafe-optional-chaining': error(),
        'no-unused-labels': error(),
        'no-unused-private-class-members': error(),
        'no-unused-vars': error({
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        }),
        'no-use-before-define': error({
          classes: false,
          functions: false,
        }),
        'no-useless-backreference': error(),
        'no-useless-catch': error(),
        'no-useless-escape': error(),
        'no-with': error(),
        'prefer-const': error(),
        'prefer-destructuring': error(),
        'prefer-regex-literals': error(),
        radix: error('always'),
        'require-yield': error(),
        'use-isnan': error(),
        'valid-typeof': error(),

        'import/sort-imports': off(),

        'jsdoc/check-access': error(),
        'jsdoc/check-alignment': error(),
        'jsdoc/check-examples': off(),
        'jsdoc/check-indentation': off(),
        'jsdoc/check-line-alignment': error(),
        'jsdoc/check-param-names': error(),
        'jsdoc/check-property-names': error(),
        'jsdoc/check-syntax': error(),
        'jsdoc/check-tag-names': error(),
        'jsdoc/check-template-names': error(),
        'jsdoc/check-types': error(),
        'jsdoc/check-values': error(),
        'jsdoc/convert-to-jsdoc-comments': off(),
        'jsdoc/empty-tags': error(),
        'jsdoc/implements-on-classes': error(),
        'jsdoc/imports-as-dependencies': off(),
        'jsdoc/informative-docs': error(),
        'jsdoc/lines-before-block': off(),
        'jsdoc/match-description': off(),
        'jsdoc/match-name': off(),
        'jsdoc/multiline-blocks': error(),
        'jsdoc/no-bad-blocks': error(),
        'jsdoc/no-blank-block-descriptions': error(),
        'jsdoc/no-blank-blocks': error(),
        'jsdoc/no-defaults': error(),
        'jsdoc/no-missing-syntax': off(),
        'jsdoc/no-multi-asterisks': error(),
        'jsdoc/no-restricted-syntax': off(),
        'jsdoc/no-types': off(),
        'jsdoc/no-undefined-types': error(),
        'jsdoc/require-asterisk-prefix': error(),
        'jsdoc/require-description': error(),
        'jsdoc/require-description-complete-sentence': off(),
        'jsdoc/require-example': off(),
        'jsdoc/require-file-overview': off(),
        'jsdoc/require-hyphen-before-param-description': error('never'),
        'jsdoc/require-jsdoc': error(),
        'jsdoc/require-param': error(),
        'jsdoc/require-param-description': error(),
        'jsdoc/require-param-name': error(),
        'jsdoc/require-param-type': error(),
        'jsdoc/require-property': error(),
        'jsdoc/require-property-description': error(),
        'jsdoc/require-property-name': error(),
        'jsdoc/require-property-type': error(),
        'jsdoc/require-returns': error(),
        'jsdoc/require-returns-check': error(),
        'jsdoc/require-returns-description': error(),
        'jsdoc/require-returns-type': error(),
        'jsdoc/require-template': off(),
        'jsdoc/require-throws': off(),
        'jsdoc/require-yields': error(),
        'jsdoc/require-yields-check': error(),
        'jsdoc/sort-tags': off(),
        'jsdoc/tag-lines': error('any', {
          startLines: 1,
        }),
        'jsdoc/text-escaping': off(),
        'jsdoc/valid-types': error(),

        'perfectionist/sort-array-includes': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-classes': error({
          groups: [
            'index-signature',

            'public-static-property',
            'protected-static-property',
            'private-static-property',

            ['public-static-get-method', 'public-static-set-method'],
            ['protected-static-get-method', 'protected-static-set-method'],
            ['private-static-get-method', 'private-static-set-method'],

            'static-block',

            'public-static-method',
            'protected-static-method',
            'private-static-method',

            ['public-readonly-property', 'public-readonly-accessor-property'],
            ['public-property', 'public-accessor-property'],
            [
              'protected-readonly-property',
              'protected-readonly-accessor-property',
            ],
            ['protected-property', 'protected-accessor-property'],
            ['private-readonly-property', 'private-readonly-accessor-property'],
            ['private-property', 'private-accessor-property'],

            ['public-get-method', 'public-set-method'],
            ['protected-get-method', 'protected-set-method'],
            ['private-get-method', 'private-set-method'],

            'constructor',

            'public-method',
            'protected-method',
            'private-method',

            'unknown',
          ],
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-decorators': off(),
        'perfectionist/sort-enums': off(),
        'perfectionist/sort-exports': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-heritage-clauses': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-imports': error({
          ignoreCase: true,
          internalPattern: ['^@/.*', '^~/.*'],
          newlinesBetween: 'always',
          order: 'asc',
          tsconfigRootDir: rootDir,
          type: 'natural',
        }),
        'perfectionist/sort-interfaces': error({
          groups: ['index-signature', 'unknown', 'method'],
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-intersection-types': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-jsx-props': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-maps': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-modules': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-named-exports': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-named-imports': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-object-types': error({
          groups: ['index-signature', 'unknown', 'method'],
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-objects': error({
          ignoreCase: true,
          order: 'asc',
          partitionByNewLine: true,
          type: 'natural',
        }),
        'perfectionist/sort-sets': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-switch-case': off(),
        'perfectionist/sort-union-types': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
        'perfectionist/sort-variable-declarations': error({
          ignoreCase: true,
          order: 'asc',
          type: 'natural',
        }),
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.d.ts', '**/*.mts'],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir: rootDir,
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        // Disable overriden rules
        'class-methods-use-this': off(),
        'default-param-last': off(),
        'dot-notation': off(),
        'max-params': off(),
        'no-array-constructor': off(),
        'no-dupe-class-members': off(),
        'no-empty-function': off(),
        'no-invalid-this': off(),
        'no-magic-numbers': off(),
        // Checked by the TS compiler
        'no-redeclare': off(),
        'no-unused-expressions': off(),
        'no-unused-vars': off(),
        'no-use-before-define': off(),
        'no-useless-constructor': off(),
        'prefer-destructuring': off(),
        'require-await': off(),
        'return-await': off(),

        'jsdoc/no-types': error(),
        'jsdoc/no-undefined-types': off(),
        'jsdoc/require-param-type': off(),
        'jsdoc/require-property-type': off(),
        'jsdoc/require-returns-type': off(),

        // TypeScript rules
        '@typescript-eslint/adjacent-overload-signatures': error(),
        '@typescript-eslint/array-type': error({ default: 'array-simple' }),
        '@typescript-eslint/await-thenable': error(),
        '@typescript-eslint/ban-ts-comment': error({
          'ts-expect-error': 'allow-with-description',
        }),
        '@typescript-eslint/ban-tslint-comment': error(),
        '@typescript-eslint/class-literal-property-style': error('fields'),
        '@typescript-eslint/class-methods-use-this': off(),
        '@typescript-eslint/consistent-generic-constructors':
          error('constructor'),
        '@typescript-eslint/consistent-indexed-object-style':
          error('index-signature'),
        // Prefer `tsconfig.compilerOptions.noImplicitReturns`
        '@typescript-eslint/consistent-return': off(),
        '@typescript-eslint/consistent-type-assertions': off({
          // assertionStyle: "as",
          // objectLiteralTypeAssertions: "never",
        }),
        '@typescript-eslint/consistent-type-definitions': error('interface'),
        '@typescript-eslint/consistent-type-exports': error({
          fixMixedExportsWithInlineTypeSpecifier: false,
        }),
        '@typescript-eslint/consistent-type-imports': error({
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        }),
        '@typescript-eslint/default-param-last': error(),
        '@typescript-eslint/dot-notation': error(),
        '@typescript-eslint/explicit-function-return-type': off({
          allowTypedFunctionExpressions: true,
        }),

        '@typescript-eslint/explicit-member-accessibility': error({
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        }),
        '@typescript-eslint/explicit-module-boundary-types': off(),
        '@typescript-eslint/init-declarations': off(),
        '@typescript-eslint/max-params': off(),
        '@typescript-eslint/member-ordering': off(),
        // This actually kinda makes a difference since function signatures are
        // contravatiant in their arguments (https://github.com/microsoft/TypeScript/pull/18654)
        '@typescript-eslint/method-signature-style': error('method'),
        '@typescript-eslint/naming-convention': warn(
          {
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            selector: 'default',
            trailingUnderscore: 'forbid',
          },
          {
            format: ['camelCase'],
            leadingUnderscore: 'require',
            modifiers: ['unused'],
            selector: 'variable',
          },
          {
            format: ['camelCase'],
            leadingUnderscore: 'require',
            modifiers: ['unused'],
            selector: 'parameter',
          },
          {
            format: ['PascalCase'],
            selector: 'typeLike',
          },
          {
            format: ['PascalCase'],
            selector: 'enumMember',
          },
          {
            format: ['camelCase', 'snake_case'],
            selector: 'property',
          },
          {
            format: ['camelCase', 'snake_case', 'UPPER_CASE'],
            selector: 'objectLiteralProperty',
          },
          {
            format: ['UPPER_CASE', 'camelCase'],
            modifiers: ['static', 'readonly'],
            selector: 'classProperty',
          },
          {
            format: ['UPPER_CASE', 'camelCase'],
            modifiers: ['const', 'global'],
            selector: 'variable',
          },
        ),
        '@typescript-eslint/no-array-constructor': error(),
        '@typescript-eslint/no-array-delete': error(),
        '@typescript-eslint/no-base-to-string': error(),
        '@typescript-eslint/no-confusing-non-null-assertion': error(),
        '@typescript-eslint/no-confusing-void-expression': error(),
        '@typescript-eslint/no-deprecated': error(),
        '@typescript-eslint/no-dupe-class-members': error(),
        '@typescript-eslint/no-duplicate-enum-values': error(),
        '@typescript-eslint/no-duplicate-type-constituents': error(),
        '@typescript-eslint/no-dynamic-delete': error(),
        '@typescript-eslint/no-empty-function': warn({
          allow: ['private-constructors', 'protected-constructors'],
        }),
        '@typescript-eslint/no-empty-object-type': warn({
          allowInterfaces: 'with-single-extends',
        }),
        // Super useful in moderation
        '@typescript-eslint/no-explicit-any': off(),
        '@typescript-eslint/no-extra-non-null-assertion': error(),
        '@typescript-eslint/no-extraneous-class': error(),
        '@typescript-eslint/no-floating-promises': error({
          checkThenables: true,
          ignoreVoid: true,
        }),
        '@typescript-eslint/no-for-in-array': error(),
        '@typescript-eslint/no-implied-eval': error(),
        '@typescript-eslint/no-import-type-side-effects': error(),
        '@typescript-eslint/no-inferrable-types': error({
          ignoreParameters: true,
          ignoreProperties: true,
        }),
        // Prefer `tsconfig.compilerOptions.noImplicitThis`
        '@typescript-eslint/no-invalid-this': off(),
        '@typescript-eslint/no-invalid-void-type': error(),
        '@typescript-eslint/no-loop-func': error(),
        // Just annoying tbh. Better to handle this in PR reviews
        '@typescript-eslint/no-magic-numbers': off(),
        '@typescript-eslint/no-meaningless-void-operator': error({
          checkNever: true,
        }),
        '@typescript-eslint/no-misused-new': error(),
        '@typescript-eslint/no-misused-promises': error(),
        '@typescript-eslint/no-mixed-enums': error(),
        '@typescript-eslint/no-namespace': off(),
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': error(),
        '@typescript-eslint/no-non-null-asserted-optional-chain': error(),
        '@typescript-eslint/no-non-null-assertion': error(),
        '@typescript-eslint/no-redundant-type-constituents': error(),
        '@typescript-eslint/no-require-imports': error(),
        '@typescript-eslint/no-restricted-imports': error('lodash'),
        '@typescript-eslint/no-restricted-types': off(),
        '@typescript-eslint/no-shadow': off(),
        '@typescript-eslint/no-this-alias': error(),
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': error(),
        '@typescript-eslint/no-unnecessary-condition': error(),
        '@typescript-eslint/no-unnecessary-parameter-property-assignment':
          error(),
        '@typescript-eslint/no-unnecessary-qualifier': error(),
        '@typescript-eslint/no-unnecessary-template-expression': error(),
        '@typescript-eslint/no-unnecessary-type-arguments': off(),
        '@typescript-eslint/no-unnecessary-type-assertion': error(),
        '@typescript-eslint/no-unnecessary-type-constraint': error(),
        '@typescript-eslint/no-unnecessary-type-parameters': error(),
        '@typescript-eslint/no-unsafe-argument': error(),
        '@typescript-eslint/no-unsafe-assignment': error(),
        '@typescript-eslint/no-unsafe-call': error(),
        '@typescript-eslint/no-unsafe-declaration-merging': error(),
        '@typescript-eslint/no-unsafe-enum-comparison': error(),
        '@typescript-eslint/no-unsafe-function-type': error(),
        '@typescript-eslint/no-unsafe-member-access': error(),
        '@typescript-eslint/no-unsafe-return': error(),
        '@typescript-eslint/no-unsafe-type-assertion': off(),
        '@typescript-eslint/no-unsafe-unary-minus': error(),
        '@typescript-eslint/no-unused-expressions': error(),
        '@typescript-eslint/no-unused-vars': error({
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        }),
        '@typescript-eslint/no-use-before-define': error({
          classes: false,
          enums: false,
          functions: false,
        }),
        '@typescript-eslint/no-useless-constructor': error(),
        '@typescript-eslint/no-useless-empty-export': error(),
        '@typescript-eslint/no-wrapper-object-types': error(),
        '@typescript-eslint/non-nullable-type-assertion-style': off(),
        '@typescript-eslint/only-throw-error': error(),
        '@typescript-eslint/parameter-properties': error({
          prefer: 'parameter-property',
        }),
        '@typescript-eslint/prefer-as-const': error(),
        '@typescript-eslint/prefer-destructuring': error(),
        '@typescript-eslint/prefer-enum-initializers': error(),
        '@typescript-eslint/prefer-find': error(),
        '@typescript-eslint/prefer-for-of': error(),
        '@typescript-eslint/prefer-function-type': error(),
        '@typescript-eslint/prefer-includes': error(),
        '@typescript-eslint/prefer-literal-enum-member': error(),
        '@typescript-eslint/prefer-namespace-keyword': error(),
        '@typescript-eslint/prefer-nullish-coalescing': error(),
        '@typescript-eslint/prefer-optional-chain': error(),
        '@typescript-eslint/prefer-promise-reject-errors': error(),
        '@typescript-eslint/prefer-readonly': error(),
        // Pretty interesting... maybe...
        '@typescript-eslint/prefer-readonly-parameter-types': off(),
        '@typescript-eslint/prefer-reduce-type-parameter': error(),
        '@typescript-eslint/prefer-regexp-exec': error(),
        '@typescript-eslint/prefer-return-this-type': off(),
        '@typescript-eslint/prefer-string-starts-ends-with': error(),
        '@typescript-eslint/promise-function-async': off(),
        '@typescript-eslint/related-getter-setter-pairs': off(),
        '@typescript-eslint/require-array-sort-compare': error(),
        '@typescript-eslint/require-await': warn(),
        '@typescript-eslint/restrict-plus-operands': error(),
        '@typescript-eslint/restrict-template-expressions': error({
          allowAny: true,
          allowBoolean: true,
          allowNever: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        }),
        '@typescript-eslint/return-await': error('always'),
        '@typescript-eslint/strict-boolean-expressions': error(),
        '@typescript-eslint/switch-exhaustiveness-check': error({
          allowDefaultCaseForExhaustiveSwitch: true,
          considerDefaultExhaustiveForUnions: true,
        }),
        '@typescript-eslint/triple-slash-reference': error(),
        '@typescript-eslint/typedef': off(),
        '@typescript-eslint/unbound-method': error({ ignoreStatic: true }),
        '@typescript-eslint/unified-signatures': error(),
        '@typescript-eslint/use-unknown-in-catch-callback-variable': error(),
      },
    },
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        ...additionalTestPatterns,
      ],
      languageOptions: {
        globals: {
          ...globals.jest,
          ...globals.jasmine,
          ...globals.mocha,
          ...vitest.environments.env.globals,
        },
      },
      plugins: {
        vitest,
      },
      rules: {
        'jsdoc/require-jsdoc': off(),

        'vitest/consistent-test-filename': off(),
        'vitest/consistent-test-it': error({ fn: 'it' }),
        'vitest/expect-expect': error({
          assertFunctionNames: ['expect*'],
        }),
        'vitest/max-expects': off(),
        'vitest/max-nested-describe': off(),
        'vitest/no-alias-methods': off(),
        'vitest/no-commented-out-tests': error(),
        'vitest/no-conditional-expect': error(),
        'vitest/no-conditional-in-test': error(),
        'vitest/no-conditional-tests': error(),
        'vitest/no-disabled-tests': warn(),
        'vitest/no-done-callback': error(),
        'vitest/no-duplicate-hooks': error(),
        'vitest/no-focused-tests': warn(),
        'vitest/no-hooks': off(),
        'vitest/no-identical-title': error(),
        'vitest/no-import-node-test': error(),
        'vitest/no-interpolation-in-snapshots': error(),
        'vitest/no-large-snapshots': off(),
        'vitest/no-mocks-import': off(),
        'vitest/no-restricted-matchers': off(),
        'vitest/no-restricted-vi-methods': off(),
        'vitest/no-standalone-expect': error(),
        'vitest/no-test-prefixes': error(),
        'vitest/no-test-return-statement': error(),
        'vitest/padding-around-all': error(),
        'vitest/prefer-called-with': error(),
        'vitest/prefer-comparison-matcher': error(),
        'vitest/prefer-each': error(),
        'vitest/prefer-equality-matcher': error(),
        'vitest/prefer-expect-assertions': off(),
        'vitest/prefer-expect-resolves': error(),
        'vitest/prefer-hooks-in-order': error(),
        'vitest/prefer-hooks-on-top': error(),
        'vitest/prefer-lowercase-title': error(),
        'vitest/prefer-mock-promise-shorthand': error(),
        'vitest/prefer-snapshot-hint': error('always'),
        'vitest/prefer-spy-on': error(),
        'vitest/prefer-strict-equal': error(),
        'vitest/prefer-to-be': off(),
        'vitest/prefer-to-be-falsy': off(),
        'vitest/prefer-to-be-object': off(),
        'vitest/prefer-to-be-truthy': off(),
        'vitest/prefer-to-contain': off(),
        'vitest/prefer-to-have-length': off(),
        'vitest/prefer-todo': error(),
        'vitest/prefer-vi-mocked': error(),
        'vitest/require-hook': error(),
        'vitest/require-local-test-context-for-concurrent-snapshots': error(),
        'vitest/require-to-throw-message': error(),
        'vitest/require-top-level-describe': error(),
        'vitest/valid-describe-callback': off(),
        'vitest/valid-expect': error(),
        'vitest/valid-expect-in-promise': error(),
        'vitest/valid-title': error({
          mustMatch: {
            describe: ['^\\S+(\\s*\\S+)*$'],
            it: ['^should(\\s*\\S+)*$'],
            test: ['^should(\\s*\\S+)*$'],
          },
          mustNotMatch: ['^\\s*$', '^\\s*\\d+\\s*$'],
        }),
      },
      settings: {
        vitest: {
          typecheck: true,
        },
      },
    },
  );
}

/**
 * Constructs an error configuration.
 *
 * @param {...unknown} configs The configurations to apply.
 * @returns {'error' | ['error', ...unknown[]]} The error configuration.
 */
function error(...configs) {
  return configs.length > 0 ? ['error', ...configs] : 'error';
}

/**
 * Constructs an off configuration.
 *
 * @param {...unknown} _configs The configurations to apply. These are
 * ignored and only serve as a placeholder.
 * @returns {'off'} The off configuration.
 */
function off(..._configs) {
  return 'off';
}

/**
 * @typedef {{
 *  rootDir?: string,
 *  strict?: boolean,
 *  additionalTestPatterns?: string[]
 * }} ConfigOptions
 */

/**
 * Constructs a warning configuration.
 *
 * @param {boolean} strict Whether to treat the warning as an error.
 * @param {...unknown} configs The configurations to apply.
 * @returns {'warn' | 'error' | ['warn' | 'error', ...unknown[]]} The warning
 * configuration.
 */
function warnFn(strict, ...configs) {
  const level = strict ? 'error' : 'warn';

  return configs.length > 0 ? [level, ...configs] : level;
}
