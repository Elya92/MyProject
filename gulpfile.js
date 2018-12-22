var gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
	//scss        = require('gulp-scss'), //Подключаем Scss пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('assets/sass/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Scss в CSS посредством gulp-sass
        .pipe(gulp.dest('assets/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - assets
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']); // Наблюдение за scss файлами в папке scss
    gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('assets/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']); //Таск по умолчанию