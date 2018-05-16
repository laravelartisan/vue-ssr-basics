const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./app')


server.get('*', (req, res) => {
    const context = { url: req.url }
    const app = createApp(context)
    const variables = {
        title: 'Hello World',
        id: 55
    }

    renderer.renderToString(app, variables, (err, html) => {
        // handle error...
        res.end(html)
    })
})
server.listen(8080)