import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
	src: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'dist'),
};

export const webpackConfig = (isMode) => {
	return {
		entry: {
			main: path.join(paths.src, 'js/main.js'),
			pricing: path.join(paths.src, 'js/pricing.js'),
			pictures: path.join(paths.src, 'js/pictures.js'),
			nft: path.join(paths.src, 'js/nft.js'),
			'nft-product': path.join(paths.src, 'js/nft-product.js'),
			auction: path.join(paths.src, 'js/auction.js'),
			pay: path.join(paths.src, 'js/pay.js'),
		},
		
		mode: isMode ? 'development' : 'production',
		
		output: {
			path: path.join(paths.build, 'js'),
			filename: '[name].min.js',
			publicPath: '/',
		},
		
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
					
					resolve: {
						fullySpecified: false,
					},
				},
			],
		},
		devtool: isMode ? 'source-map' : 'cheap-source-map',
	};
};