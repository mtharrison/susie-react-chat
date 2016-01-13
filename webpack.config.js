const Path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: Path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
