export const root = true;
export const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};
export const settings = {
  react: {
    version: 'detect'
  }
};
export const env = {
  jest: true,
  browser: true,
  amd: true,
  node: true
};
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
;
export const rules = {
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  'prettier/prettier': ['error', {}, { usePrettierrc: true }]
};