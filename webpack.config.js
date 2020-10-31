const javaScriptRules = require( './webpack-rules/javascript-rules' );

/** Configuracion usando un Objeto */
module .exports = {
    module: {
        rules: [ javaScriptRules ]
    }
}