const javaScriptRules = require( './webpack-rules/javascript-rules' );

/** Configuracion usando un Objeto */
module .exports = {
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [ javaScriptRules ]
    }
}