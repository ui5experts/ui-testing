const gulp = require('gulp');
const backstop = require('backstopjs');
const backstopConfig = require("./backstop.conf.js");


gulp.task('backstop:approve', (cb) => {
  console.log(backstop('approve', {
    config: backstopConfig
  }));
  cb();
});

gulp.task('backstop:test', (cb) => {
  const server = require('./server');
  backstop('test', {
      config: backstopConfig
    })
    .then(() => {
      server.close();
      cb();
    })
    .catch((e) => {
      server.close();
      cb(e);
    });
});
