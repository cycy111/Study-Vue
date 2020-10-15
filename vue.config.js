// vue.config.js
const path = require('path')


function addStyleResource(rule) {
    rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
    patterns: [
    path.resolve(__dirname, './src/styles/imports.scss'),
    ],
    })
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/cart/'
    : '/c',

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type =>
        addStyleResource(config.module.rule('scss').oneOf(type)))
        },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    },
     devServer:{
    //     before(app) {
    //         app.get('/api/courses', (req, res) => {
    //         res.json([{ name: 'web全栈', price: 8999 }, { name: 'web高级', price:
    //         8999 }])
    //         })
    //     },
        proxy: 'http://localhost:3000'
    }
        
}


    
    
