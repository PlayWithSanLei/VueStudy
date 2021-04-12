const {resolve} = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ],
    mode: 'production'
}
