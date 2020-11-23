const webpack = require('webpack')
const path = require('path') 


module.exports = {

    entry:'./src/main.js',

    output:{
        filename:"main.js",
        publicPath:'/dist/',
        path:path.resolve(__dirname,'./dist')
    },
    mode:'development',
    module:{
        
    },
    plugins:{}
}