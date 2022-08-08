// ./vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-vue-front-end/'
    : '/'
}