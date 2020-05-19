module.exports = {
  host: {
    base: "http://1.2.3.127:9000",
    upload: "http://1.2.3.127:9000",
    DB: "mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTgwMTQ3NH0.E6KhxBFFZZ7mqBuMcg_1_vuyycEF6APiHLTfhkXFiO8",
  },
  path: {
    upload: {
      upFile: "/multers",
    },
    base: {
      posts: "/posts",
      categories: "/categories",
      compositions: "/compositions",
    },
  },
  client: {
    posts: "/posts",
    adminPost: "/admin/post",
    adminComposition: "/admin/composition",
  },
};
