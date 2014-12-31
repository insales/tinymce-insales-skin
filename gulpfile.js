var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});
var rename = require('gulp-rename');

gulp.task('less:modern', function() {
    gulp.src('./src/skins/*/skin.modern.dev.less')
        .pipe(less({plugins: [cleancss]}))
        .pipe(rename({ basename: 'skin', extname: '.min.css' }))
        .pipe(gulp.dest('./tinymce/skins'));
});

gulp.task('skins', ['less:modern'], function() {
    gulp.src('./src/skins/*/{img,fonts}/*')
        .pipe(gulp.dest('./tinymce/skins'));
});

gulp.task('default', ['skins']);

