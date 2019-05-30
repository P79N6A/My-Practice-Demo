var gulp = require('gulp')

gulp.task('watch', function () {
  gulp.watch('http://127.0.0.1:20018/static/dist/public/f7efe91207d476a0524f5db62b15b48c/app-service.js', function (event) {
    console.log('文件更新');
    event()
  });
}); 