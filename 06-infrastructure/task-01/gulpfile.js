/**
 * Created by Iryna_Petrenko1 on 8/21/2017.
 */
const gulp = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const pug = require('gulp-pug');
const less = require('gulp-less');
const path = require('path');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

gulp.task('all-css', function () {
    return gulp.src(['src/less/*.less', './node_modules/bootstrap-less/bootstrap/index.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concatCss("all.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('views', function () {
    return gulp.src('src/pug/index.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('build'));
});


gulp.task('lint', () => {
    return gulp.src(['src/js/main.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bundle', function () {
    return gulp.src([
        "src/js/main.js"
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(webpack({
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(minify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'build/'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'views', 'all-css', 'bundle'], function () {
    gulp.watch('src/less/*.less', ['all-css']);
    gulp.watch('src/pug/*.pug',['views'], browserSync.reload);
    gulp.watch('src/js/*.js',['bundle'], browserSync.reload);

});

gulp.task('default', ['bundle', 'views', 'all-css']);

