//-----------------------------------------------------
// Swanix Docs
// by Sebastian Serna
// (c) 2019-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');

//-----------------------------------------------------
// Server tasks
//-----------------------------------------------------

function watch_files() {
  browserSync.init({
    server: {
        baseDir: 'docs',
        index: 'index.html',
        serveStaticOptions: {
          extensions: ['html']
        }
    }
  });

  watch('./docs/**/*.json').on('change', browserSync.reload);
  watch('./docs/**/*.svg').on('change', browserSync.reload);
  watch('./docs/**/*.html').on('change', browserSync.reload);
}

function reload(done) {
    browserSync.reload();
    done();
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;