const routes = (module.exports = require('next-routes')())

routes.add('/', 'index').add('/post', 'post').add('/blog', 'index').add('/blog/:id', 'index')
