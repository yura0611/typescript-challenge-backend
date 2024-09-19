const tsEslintPlugin = require('@typescript-eslint/eslint-plugin')
const tsEslintParser = require('@typescript-eslint/parser')
const jest = require('eslint-plugin-jest')
const noOnlyTests = require('eslint-plugin-no-only-tests')
const prettierEslint = require('prettier-eslint')

module.exports = [
  {
    files: ['*.ts', '*.js'],
    languageOptions: {
      parser: tsEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      ...prettierEslint.rules,
      '@typescript-eslint/no-empty-function': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
  {
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['*.spec.ts'],
    plugins: {
      'no-only-tests': noOnlyTests,
      jest,
    },
    rules: {
      'no-only-tests/no-only-tests': 'error',
      'jest/consistent-test-it': ['error', { fn: 'test' }],
      'jest/no-identical-title': 'warn',
    },
  },
]
