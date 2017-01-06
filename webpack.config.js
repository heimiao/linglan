var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //该插件是独立css文件用的
var HtmlwebpackPlugin = require('html-webpack-plugin'); //该插件是编译html用的

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); //多入口
module.exports = {
	//entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main')],
//	devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
	entry: {
		//"jquery": path.resolve(__dirname, 'app/lib/jquery-2.2.3.min'),
		//"bootstrap": path.resolve(__dirname, 'app/lib/bootstrap/js/bootstrap'),
		"main": path.resolve(__dirname, 'app/main'),
	},
	resolve: {
		/* alias:{
		    "react":pathToReact//如果设置别名，引入的时候直接required（"react"）
		 }, */
		extensions: ['', '.js', '.jsx', '.scss']
	},
	output: {
		path: path.resolve(__dirname, 'dist'), //path参数表示生成文件的根目录
		publicPath: "/", //path参数其实是针对本地文件系统的，而publicPath则针对的是浏览器
		filename: 'js/[chunkhash:8].[name].js', //hash是对每次编译修改名称，(每次编译名字不一样)，chunkhash是对每个文件修改名称（每次文件修改）
	},
	externals: [
		//该配置项是控制require获取的js文件是自己提供的，并不是从module里边找，而且不会打包进去
//		{jquery:"window.$"}//如果用这个前提是你页面已经scropt进去了，使用的时候直接require（jquery）
		//第一种写法
		/*  {"../build/react.min.js": 'React'}
		 	 //第二种写法，这货怎么用的有木有大神教一下- -！
		  {"../build/react.min.js": {
		      root: 'ReactJS',
		      commonjs: ["./ReactJS", "ReactJS"],
		  }}
		 * */
	],
	module: {
		noParse: [pathToReact], //禁止解析压缩的react.js
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/, //参数用来剔除掉需要忽略的资源，该值应是一个条件值(condition)。
			//include:"",参数用来表示本loader配置仅针对哪些目录/文件 如果和test一起使用则是and的作用
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}, {
			test: /\.scss$/,
			//loader:'style!css!sass?sourceMap'
			loader: ExtractTextPlugin.extract(
				'css?sourceMap!' +
				'sass?sourceMap'
			)
		},{
			test: require.resolve('jquery'),
			loader: 'expose?$!expose?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=image/svg+xml"
		}]
	},
	plugins: [
		new webpack.BannerPlugin("合并的模块都在此该文件下包括了js css 图片"), //添加注释，内置插件，第三方需要自己npm install
		new ExtractTextPlugin('styles.css'),
		new webpack.ProvidePlugin({
			//引用这个是不用在其他js模块再次importjquery了省去了一行代码，前提死通过npm安装
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		}),
		/* 
		 * //智能判断打包公共代码并输出一个chunk,一般多页面的时候使用
		 * new CommonsChunkPlugin({
			//name:"public",
	        //filename:"public/all.js",//打包后生产的js文件，也是可以用上[name]、[hash]、[chunkhash]这些变量的啦
		    //chunks:['lib'],//需要把这个模块下的js合并到public.js下
			//minChunks: 2 //公共代码的判断标准：某个js模块被多少个chunk加载了才算是公共代码。
   		}), */
		new HtmlwebpackPlugin({
			title: 'Hello World app',
			template: "./app/html/index.html",
			/*minify:{ //压缩HTML文件
			removeComments:true, //移除HTML中的注释
			collapseWhitespace:true //删除空白符与换行符
			}*/
		})
	]
}