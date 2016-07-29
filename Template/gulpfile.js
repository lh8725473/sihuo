var gulp = require('gulp');
var less = require('gulp-less'); //编译LESS文件
var concat = require('gulp-concat'); //合并
var connect = require('gulp-connect'); //创建本地服务
var autoprefixer = require('gulp-autoprefixer'); //自动为CSS添加前缀

// 创建本地服务器
gulp.task('server', function() {
    connect.server({
        name: 'develop',
        root: './',
        port: 1377,
        livereload: true
    });
});

// 编译CSS文件
gulp.task('less', function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
})

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/less/*.less', ['less']);
})

gulp.task('default', ['server', 'watch']);
