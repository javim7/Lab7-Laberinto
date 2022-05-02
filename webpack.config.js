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
    resolve: {
      extensions: ['.js','.jsx']
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
        },
        {
            test: /\.gif$/,
            use: 'file-loader',
        },
        {
            test: /\.svg$/,
            use: 'file-loader'
        }]
    },
};

module.exports = {
      resolve: {extensions: ['.js','.jsx']}
    }