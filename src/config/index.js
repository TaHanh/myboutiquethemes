module.exports = {
  host: {
    base: "http://192.168.0.102:9000",
    upload: "http://192.168.0.102:9000",
    DB: "mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTgwMTQ3NH0.E6KhxBFFZZ7mqBuMcg_1_vuyycEF6APiHLTfhkXFiO8",
    access_token: "sOx6Ht1o4VexuHZTSy548J4ALjJzGQNS",
  },
  path: {
    upload: {
      upFile: "/multers",
    },
    base: {
      posts: "/posts",
      categories: "/categories",
      compositions: "/compositions",
      users: "/users",
      auth: "/auth?access_token=",
      tags: "/tags",
    },
  },
  client: {
    posts: "/posts",
    adminPost: "/admin/posts",
    adminPostDetail: "/admin/posts/detail",
    adminComposition: "/admin/compositions",
    tags: "/tags/",
  },
};
