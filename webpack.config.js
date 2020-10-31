const 
    HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
    javaScriptRules = require( './webpack-rules/javascript-rules' );

/** Configuracion usando un Objeto */
module .exports = {
    output: {
        filename: 'app.[contenthash].js'        //  Crea un contenthast al nombre del archivo para evitar tener problemas de cache
    },
    module: {
        rules: [ javaScriptRules ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack paso a paso!',
            template: './src/index.html'
        })
    ]
}