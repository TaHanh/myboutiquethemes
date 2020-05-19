module.exports = {
  host: {
    base: 'http://1.2.3.127:9000',
    upload: 'http://1.2.3.127:9000',
    DB: 'mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv',
    token: '',
  },
  path: {
    upload: {
      upFile: '/multers',
    },
    base: {
      posts: '/posts',
      categories: '/categories',
      compositions: '/compositions',
    },
  },
  client: {
    posts: '/posts',
    adminPost: '/admin/post',
    adminComposition: '/admin/composition',
  },
}
