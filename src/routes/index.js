const routes = (module.exports = require('next-routes')())

routes.add('/', 'index').add('/blog', 'index').add('/blog/:id', 'index')
