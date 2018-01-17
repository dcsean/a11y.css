'use strict';

var gulp = require('gulp');

// Single tasks
gulp.task('sass', require('./tasks/sass'));
gulp.task('sassdoc', require('./tasks/sassdoc'));
gulp.task('hologram-js', require('./tasks/hologram-js'));
gulp.task('hologram-sass', require('./tasks/hologram-sass'));
gulp.task('hologram', ['hologram-sass', 'hologram-js'], require('./tasks/hologram'));
gulp.task('scss-lint', require('./tasks/scss-lint'));
gulp.task('css-lint', require('./tasks/css-lint'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('copy-css', require('./tasks/webextension-cp-css'));
gulp.task('move-css', require('./tasks/webextension-mv-css'));
gulp.task('translate', require('./tasks/translate'));

// Meta tasks
gulp.task('docs', ['sassdoc', 'hologram']);
gulp.task('webextension:css', ['copy-css', 'move-css']);
gulp.task('webextension', ['webextension:css'], require('./tasks/webextension'));
gulp.task('lints', ['scss-lint', 'css-lint']);
gulp.task('default', ['sass']);
