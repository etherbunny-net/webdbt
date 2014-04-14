var gulp = require('gulp');
var gulpif = require('gulp-if');
var path = require('path');
var es = require('event-stream');
var plugins = require('gulp-load-plugins')();

var warsrc = 'src/main/webapp';
var wardst = 'target/webdbt-ui-0.0.1-SNAPSHOT';

gulp.task('vendor', function() {
    return es.merge(
        plugins.bowerFiles(),
        gulp.src('bootstrap/less/**', {cwd: 'bower_components', cwdbase: true})
    ).pipe(gulp.dest(warsrc + '/vendor'));
});

gulp.task('prod-html', function(cb) {
    return gulp.src('src/main/webapp/index.html')
        .pipe(plugins.usemin({
            css: [plugins.less()],
            js: [plugins.ngmin(), plugins.uglify()]
        }))
        .pipe(gulp.dest(wardst));
});

gulp.task('html', function(cb) {
    return gulp.src('src/main/webapp/index.html')
        .pipe(gulp.dest(wardst));
});

gulp.task('copy', function() {
    return gulp.src(warsrc + '/{vendor,css,image}')
        .pipe(gulp.dest(wardst));
});

gulp.task('css', function() {
    return gulp.src(warsrc + '/css/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest(wardst + '/css'));
});

gulp.task('default', ['html', 'copy', 'css']);
gulp.task('production', ['prod-html', 'copy', 'css']);
