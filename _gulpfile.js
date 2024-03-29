import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import del from 'del';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

// Styles
export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML
const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

// Scripts
const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
}

// Images
const optimizeImages = () => {
  return gulp.src('source/media/images/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/media/images'))
}

// const copyImages = () => {
//   return gulp.src('source/img/photo/*.{png,jpg}')
//     .pipe(gulp.dest('build/img/photo'))
// }

// WebP
// const createWebp = () => {
//   return gulp.src('source/img/photo/*.{png,jpg}')
//     .pipe(squoosh({
//       webp: {}
//     }))
//     .pipe(gulp.dest('build/img/photo'))
// }

// SVG
const svg = () =>
  gulp.src(['source/media/**/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/media/images/'));

// Copy
const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2, woff}',
    'source/*.ico',
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'))
  done();
}

// Clean
const clean = () => {
  return del('build');
};


// Server
const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload
const reload = (done) => {
  browser.reload();
  done();
}

// Watcher
export const watcher = () => {
  gulp.watch('source/sass/**/*.sсss', gulp.series(styles));
  gulp.watch('source/js/app.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
}

// Build
export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    // createWebp
  ),
);

// Default
export default gulp.series(
  clean,
  copy,
  // copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    // createWebp,
  ),
  gulp.series(
    server,
    watcher
  ));
