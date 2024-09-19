import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import jest from 'eslint-plugin-jest'
import noOnlyTests from 'eslint-plugin-no-only-tests'
import prettierEslint from 'prettier-eslint'

export default [
  {
    files: ['**/*.ts', '**/*.js'],
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
