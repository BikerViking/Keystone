module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    vi: 'readonly',
    vitest: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'vitest'],
  rules: {
    'react/react-in-jsx-scope': 'off', // not needed with React 17+
    'react/prop-types': 'off', // using TypeScript or not? but there is none; but to avoid warnings
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
