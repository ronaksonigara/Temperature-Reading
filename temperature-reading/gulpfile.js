var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./src/styles/sass/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);