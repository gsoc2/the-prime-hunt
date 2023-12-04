const { join } = require('path');

const tsConfigFile = require(join(__dirname, 'tsconfig.json'));

const extendAirBnBRules = [
  'airbnb-base',
  'airbnb/hooks',
];

const javascriptRules = {
  'no-continue': 1,
  'no-plusplus': 0,
  'arrow-body-style': 0,
  'no-nested-ternary': 0,
  'no-await-in-loop': 1,
  'no-param-reassign': 1,
  'no-unused-vars': 1,
  'no-undef': 0,
  'no-shadow': 0,
  'class-methods-use-this': 1,
  'no-use-before-define': 0,
  'global-require': 1,
  'import/order': 0,
  'import/prefer-default-export': 0,
  'import/extensions': 0,
  'import/no-extraneous-dependencies': 0,
  'import/no-relative-packages': 0,
  'import/no-dynamic-require': 1,
};

const json = [
  {
    files: ['*.json'],
    parser: 'jsonc-eslint-parser',
    extends: [
      'plugin:jsonc/all',
    ],
    rules: {
      'jsonc/indent': ['error', 2],
    },
  },
  {
    files: ['tsconfig.json', 'package.json'],
    rules: {
      'jsonc/key-name-casing': 0,
      'jsonc/sort-keys': 0,
    },
  },
];

const js = [
  {
    files: ['*.js', '*.jsx', '*.mjs'],
    extends: [
      ...extendAirBnBRules,
    ],
    parser: '@babel/eslint-parser',
    rules: {
      ...javascriptRules,
    },
  },
  {
    files: ['.eslintrc.js'],
    rules: {
      'import/no-dynamic-require': 0,
    },
  },
];

const typescript = [
  {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    extends: [
      ...extendAirBnBRules,
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      ...javascriptRules,
      '@typescript-eslint/no-shadow': 1,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-var-requires': 1,
    },
    plugins: ['@typescript-eslint'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.d.ts'],
        },
        typescript: {
          project: tsConfigFile,
        },
      },
    },
  },
];

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    '!.storybook',
    'package-lock.json',
    'node_modules',
    'storybook-static',
    'tmp',
  ],
  overrides: [
    ...js,
    ...typescript,
    ...json,
  ],
};
