const path =  require("path")

module.exports = {
    entry:{
        main : './app.js'
    },
    output : {
        path : path.join(__dirname , 'dist'),
        publicPath : '/',
        filename : '',
        clean : true
    },
    mode : 'development',
    target : 'node',
    module : {
        rules :[
            {
                test : /\/js$/,
                exclude : /node_modeles/,
                loader : "bable-loader"
            }
        ]
    }
}