var gulp        = require('gulp'),
    LiveServer  = require('gulp-live-server'),
    browserSync = require('browser-sync');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('serve', ['live-server'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    port: 9001
  });
});
