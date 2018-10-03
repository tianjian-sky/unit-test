var glob = require('glob')
var path = require('path')
var webpack = require('webpack')
var rootPath = path.resolve(__dirname, './')
function addEntry () {
    let entryObj = {}
    entryObj = getEntry()
    console.log('bb', entryObj)
    return entryObj

    function getEntry () {
        let files = glob.sync('./spec/specs/*.*')
        console.log('files', files)
        let dirname, entries = {}
       
        for (let i = 0; i < files.length; i++) {
        console.log('00000', files[i].match(/^.*\/([^.]*)\.spec\.js/)[1])
          entries[files[i].match(/^.*\/([^.]*)\.spec\.js/)[1]] = files[i]
        }
        console.dir('ee', entries)
        return entries
      }
}
module.exports = {
    entry: addEntry(),
    output: {
        path:   __dirname + '/es6',
        filename: '[name].spec.js?[chunkhash]'
    },
    resolve: {
        extensions: ['.js', '.json', '.less', '.ejs'],
        alias: {
            '@bootstrap': path.resolve(rootPath, './node_modules/bootstrap/dist'),
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
        {
            test: /\.ejs$/,
            use: 'ejs-loader'
        },
        {
            test: /\.css$/,
            use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader']
        },
        {
            test: /\.less$/,
            use: ["style-loader", {loader: 'css-loader', options: {minimize: true}}, 'postcss-loader', 'less-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader?limit=500000'
        },
        {
            test: /\.(ttf|svg|eot|woff|woff2)$/,
            use: ['file-loader']
        }
        ]
    }
}
