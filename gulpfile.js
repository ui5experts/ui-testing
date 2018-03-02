const gulp = require('gulp');
const backstop = require('backstopjs');
const backstopConfig = require("./backstop.config.js");


gulp.task('backstop:approve', (cb) => {
  backstop('approve', {
    config: backstopConfig
  });
  cb();
});

gulp.task('backstop:test', () => {
  const server = require('./server');
  return backstop('test', {
      config: backstopConfig
    })
    .then(() => {
      server.close();
    })
    .catch(() => {
      server.close();
    });
});
