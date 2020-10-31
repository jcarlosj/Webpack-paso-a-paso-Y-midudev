module .exports = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [ '@babel/preset-react' ],
            plugins: [ 
                /** Dos opciones de plugins para hacer uso del Optional Chaining Operator en nuestro codigo */
                //'@babel/plugin-syntax-optional-chaining',     //  Plugin que dara soporte a la caracteristica nueva sin modificarla
                '@babel/plugin-proposal-optional-chaining'      //  Plugin que transpilara/transformara la caracteristica nueva a codigo compatible
            ]
        }
    }
};