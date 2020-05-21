const routes = (module.exports = require('next-routes')())

routes.add('/', 'index').add('/admimmm', 'posts').add('/blog/:id', 'index')
