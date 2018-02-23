const gulp = require('gulp');
const backstop = require('backstopjs');

gulp.task('backstop:approve', () => backstop('approve'));
gulp.task('backstop:test', () => backstop('test', {
  config: require("./backstop.config.js")
}));
