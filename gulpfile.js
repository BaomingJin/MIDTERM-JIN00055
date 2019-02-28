var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    replace = require('gulp-replace'),
    sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('server', function(){
    browserSync.init({
        server: './src',
        notify: false
    });
    
    gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

// build
gulp.task('build', function(){
    gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css/'));

    gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img/'));

    gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js/'));

    gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});













