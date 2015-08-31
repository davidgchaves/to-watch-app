var gulp        = require('gulp'),
    LiveServer  = require('gulp-live-server'),
    browserSync = require('browser-sync'),
    babelify    = require('babelify'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('copy-css', function () {
  gulp.src(['app/*.css'])
  .pipe(gulp.dest('./build'));
});

gulp.task('bundle', ['copy-css'], function () {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
  .transform(babelify)
  .transform(reactify)
  .transform(babelify.configure({
    stage: 0,
    sourceMaps: true
  }))
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
