const { src, series, dest } = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const gulpCopy = require('gulp-copy');
require('dotenv').config();

const stitch = require("./stitch/stitch.json");


function copyTask() {
      var sourceFiles = ['./*.html', './*config.js', './css', './vendor'];
      var destination = './stitch/hosting/files/';
      
      return src(sourceFiles)
      .pipe(dest(destination));
}
function cleanTask() {
    return src(["./stitch/hosting/files"], { read: false, allowEmpty: true })
       .pipe(clean());
 }
 function generateTask() {
//     return src("./hugo", { read: true })
//        .pipe(shell([
//              `cd <%= file.path %> && hugo --baseURL https://${stitch.hosting.app_default_domain}`
//        ]));
      // return src("./stitch", { read: true})
      //     .pipe(shell([
      //           `mkdir ./stitch/hosting/files && cp -R ./*.html ./*.js ./stitch/hosting/files/`
      //     ]));
 }
 function deployTask() {
    return src("./stitch/hosting", { read: true })
       .pipe(shell([
             `stitch-cli login --private-api-key=${process.env.STITCH_PRIVATE_API_KEY} --api-key=${process.env.STITCH_API_KEY} --yes`,
             `cd <%= file.path %> && stitch-cli import --include-hosting --yes`
       ]));
 }
exports.clean = cleanTask;
exports.generate = generateTask;
exports.build = series(cleanTask, generateTask);
// exports.deploy = series(cleanTask, generateTask, deployTask);
exports.copy = copyTask;
exports.deploy = series(cleanTask, copyTask, deployTask);
