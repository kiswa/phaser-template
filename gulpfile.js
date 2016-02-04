var gulp = require('gulp'),
    del = require('del'),

    jsLint = require('gulp-jshint'),
    jsLintReporter = require('jshint-stylish'),

    src = 'src/',
    dist = 'dist/',
    paths = {
        js: src + 'js/**/*.js',
        html: src + '**/*.html',
        css: src + 'css/**/*.css',
        assets: src + 'assets/**/*.*',
        phaser: 'node_modules/phaser/build/phaser.*'
    };

gulp.task('clean', function() {
    return del(dist);
});

gulp.task('lintJs', function() {
    return gulp.src(paths.js)
        .pipe(jsLint())
        .pipe(jsLint.reporter(jsLintReporter));
});

gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(gulp.dest(dist + 'js/'));
});

gulp.task('css', function() {
    return gulp.src(paths.css)
        .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(dist));
});

gulp.task('assets', function() {
    return gulp.src(paths.assets)
        .pipe(gulp.dest(dist + 'assets/'));
});

gulp.task('vendor', function() {
    return gulp.src(paths.phaser)
        .pipe(gulp.dest(dist + 'js/lib/'));
});

gulp.task('watch', function() {
    var watchJs = gulp.watch(paths.js, ['lintJs', 'scripts']),
        watchHtml = gulp.watch(paths.html, ['html']),
        watchCss = gulp.watch(paths.css, ['css']),
        watchAssets = gulp.watch(paths.assets, ['assets']),

        onChanged = function(event) {
            console.log('File ' + event.path + ' was ' + event.type + '. Running tasks...');
        }

    watchJs.on('change', onChanged);
    watchHtml.on('change', onChanged);
    watchCss.on('change', onChanged);
    watchAssets.on('change', onChanged);
});

gulp.task('default', ['lintJs', 'scripts', 'css', 'html', 'assets', 'vendor']);
