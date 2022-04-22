export default {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: 'dist',
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.png$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.mp3$/,
            use: 'file-loader',
        }]
    },
};