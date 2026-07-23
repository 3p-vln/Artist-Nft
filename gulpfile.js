import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins} from "./gulp/config/plugins.js";

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriteCreate } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	path: path,
	gulp: gulp,
	plugins: plugins
}

function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

export { svgSpriteCreate }

const fonts = gulp.series(ttfToWoff, fontsStyle);

const mainTask = gulp.series(fonts, gulp.parallel(html, scss, js, images));

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);
const deployZip = gulp.series(reset, mainTask, zip);
const deployFtp = gulp.series(reset, mainTask, ftp);

export {dev, build, deployZip, deployFtp};

gulp.task('default', dev);
