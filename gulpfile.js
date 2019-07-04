//-----------------------------------------------------
// Swanix Docs
// by Sebastian Serna
// (c) 2019-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');
const jsonConcat = require('gulp-json-concat');

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
  watch('./docs/**/*.css').on('change', browserSync.reload);
  watch('./docs/**/*.md', series(markdown_compiler, merge_json, reload));
}

function reload(done) {
    browserSync.reload();
    done();
}

//-----------------------------------------------------
// Markdown to JSON task
//-----------------------------------------------------

marked.setOptions({
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

function markdown_compiler() {
  return src('./docs/content/md/*.md')
    .pipe(markdownToJSON(marked))
    .pipe(dest('./docs/content/json/'));
}

function merge_json() {
  return src('./docs/content/json/*.json')
    .pipe(jsonConcat('content.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(dest('./docs/content/'));
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;
exports.markdown = markdown_compiler;
exports.mergeJson = merge_json;