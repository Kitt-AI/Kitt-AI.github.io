module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb/base',
  rules: {
    'no-param-reassign': ['error', { 'props': false }]
  },
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
  },
};
