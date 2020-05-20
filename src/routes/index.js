const routes = (module.exports = require('next-routes')())

routes.add('/', 'index').add('/admin/posts/detail/:id', 'admin.post.detail').add('/blog/:id', 'index')
