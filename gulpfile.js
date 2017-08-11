var gulp = require('gulp')
var print = require('gulp-print')

// 测试
gulp.task('aaa', function () {
  console.log('adadad')
})

// glob &  print file
gulp.task('readHtml', function () {
  return gulp
    .src(['*.html'])
    .pipe(print())
})
