var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});
var rename = require('gulp-rename');
var path = require('path');

var vendor = path.join(process.cwd(), 'vendor', 'assets');

gulp.task('less:modern', function() {
    var dest = path.join(vendor, 'stylesheets', 'tinymce', 'skins');
    gulp.src('./src/skins/*/skin.modern.dev.less')
        .pipe(less({plugins: [cleancss]}))
        .pipe(rename({ basename: 'skin', extname: '.min.css' }))
        .pipe(gulp.dest(dest));
});

gulp.task('skins', ['less:modern'], function() {
    gulp.src('./src/skins/*/img/*')
        .pipe(gulp.dest(path.join(vendor, 'images', 'tinymce', 'skins')));
    gulp.src('./src/skins/*/fonts/*')
        .pipe(gulp.dest(path.join(vendor, 'fonts', 'tinymce', 'skins')));
});

gulp.task('watch', ['skins'], function() {
    gulp.watch('./src/skins/*/*.less', ['skins']);
});

gulp.task('default', ['skins']);

