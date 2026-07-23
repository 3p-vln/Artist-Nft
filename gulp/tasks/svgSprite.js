import svgSprite from 'gulp-svg-sprite';

export const svgSpriteCreate = () => {
	return app.gulp.src(app.path.src.svg, { encoding: false })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG Sprite',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(svgSprite({
			mode:{
				stack: {
					sprite: '../icons/sprite.svg',
					example: true,
				}
			}
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}