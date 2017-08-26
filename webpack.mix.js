let mix = require('laravel-mix');
let webpack = require('webpack');

//const mixBabelConfig = Config.babel();

let plugins = [];
if (Config.inProduction) {
    plugins = [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ];
}


mix.webpackConfig({
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            kui : path.resolve(__dirname, 'resources/assets/kui/')
        }
    },
    plugins
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.react('resources/assets/js/site/app-site.js', 'public/js')
  .react('resources/assets/js/admin/app-admin.js', 'public/js')
  .extract([
    'lodash','axios',
    'react','react-dom','react-router','redux','react-redux',
    'kui'
  ],'js/vendor.js');

if (Config.inProduction) {
    mix.version();
}
