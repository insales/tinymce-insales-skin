var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});
var rename = require('gulp-rename');
var rm = require('gulp-rm');
var path = require('path');

var vendor = path.join(process.cwd(), 'vendor', 'assets');
var dest = path.join(vendor, 'stylesheets', 'tinymce', 'skins');

gulp.task('modern', function() {
    gulp.src('./src/skins/*/skin.modern.dev.less')
        .pipe(less({plugins: [cleancss]}))
        .pipe(rename({ basename: 'skin', extname: '.min.css' }))
        .pipe(gulp.dest(dest));
});

gulp.task('static', function() {
    gulp.src('./src/skins/*/img/*')
        .pipe(gulp.dest(path.join(vendor, 'images', 'tinymce', 'skins')));
    gulp.src('./src/skins/*/fonts/*')
        .pipe(gulp.dest(path.join(vendor, 'fonts', 'tinymce', 'skins')));
});

gulp.task('content', function() {
    gulp.src('./src/skins/*/Content.less')
        .pipe(less({plugins: [cleancss]}))
        .pipe(rename({ basename: 'content', extname: '.min.css' }))
        .pipe(gulp.dest(dest));
});

gulp.task('content-inline', function() {
    gulp.src('./src/skins/*/Content.Inline.less')
        .pipe(less({plugins: [cleancss]}))
        .pipe(rename({ basename: 'content', extname: '.inline.min.css' }))
        .pipe(gulp.dest(dest));
});

gulp.task('skins', ['modern', 'content', 'content-inline', 'static']);

gulp.task('watch', ['skins'], function() {
    gulp.watch('./src/skins/*/*.less', ['skins']);
});

gulp.task('clean', function() {
    gulp.src(path.join(vendor, '*', '**'), { read: false })
        .pipe(rm());
});

gulp.task('default', ['clean', 'skins']);

