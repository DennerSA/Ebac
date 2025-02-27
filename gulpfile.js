const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcempas = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcempas.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcempas.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJS() {
    return gulp.src('./source/scripts/*js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/styles/*scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(comprimeJS))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg))
}