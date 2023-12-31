/*jslint es6 */
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, '/pds/scripts/index.ts'),
    devtool: "source-map",
    output: {
        filename: 'js/phenix.js',
        path: path.join(__dirname, '/app/'),
        globalObject: 'this',
        library: {
            type: 'umd',
            name: 'Phenix',
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
};