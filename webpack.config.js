module.exports={
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname+"/",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist'
    }

};