module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['html'],
  extends: ['standard'],
  rules: {
    'prefer-promise-reject-errors': [0, { allowEmptyReject: false }]
  }
}
