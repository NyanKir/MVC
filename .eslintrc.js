module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'quotes': ['error', 'single'],
    'comma-dangle': [
      'error',
      'never'
    ],
    '@typescript-eslint/no-var-requires':'off',
    semi: ['error','never']
  },
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module'
  }
};
