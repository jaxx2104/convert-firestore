module.exports = {
  env: {
    node: true,
    es6: true
  },
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}