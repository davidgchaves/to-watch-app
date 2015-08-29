var gulp        = require('gulp'),
    LiveServer  = require('gulp-live-server'),
    browserSync = require('browser-sync'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('bundle', function () {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('serve', ['bundle', 'live-server'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    port: 9001
  });
});
