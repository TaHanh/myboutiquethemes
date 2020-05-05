const next = require('next')
const routes = require('./src/routes')
const routesAPI = require('./src/routes/api')
const port = parseInt(process.env.PORT, 10) || 3000 // Port để chạy app Nextjs, cũng là server nodejs
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
var path = require('path')
const bodyParser = require('body-parser')

// const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler()
// With express
const express = require('express')
const server = express()
// view engine setup
// server.set('views', path.join(__dirname, 'pages'))
// server.set('view engine', 'js')
// server.set('view engine', 'js')
// server.engine('js', reactViews.createEngine())

// server.use(express.static(__dirname + '/public'))

app.prepare().then(() => {
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.use(handler)

  // server.use('/', routes)
  server.use('/api', routesAPI)

  //Tạo ra các router. Dòng này có ý nghĩa khi gửi request đến path /a . Sẽ render file /a.js trong thư mục pages/a.js của Nextjs
  server.get('/api/a', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  // Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
  // https://nextjs.org/docs/routing/introduction
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
