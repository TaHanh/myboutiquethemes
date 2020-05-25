import Axios from 'axios'
import config from '../config'
// const limit = 6

// export default async function getInitialData() {
//   let posts = []
//   let categories = []
//   let compositions = []

//   let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit).catch((e) => {
//     console.log('Error: ', e.code)
//   })

//   let resCate = await Axios.get(config.host.base + config.path.base.categories).catch((e) => {
//     console.log('Error: ', e.code)
//   })
//   let resCompos = await Axios.get(config.host.base + config.path.base.compositions).catch((e) =>
//     console.log('Error: ', e.code)
//   )

//   posts = resPost && resPost.data != undefined ? resPost.data : []
//   categories = resCate && resCate.data != undefined ? resCate.data : []
//   compositions = (resCompos && resCompos.data) != undefined ? resCompos.data : []

//   return { posts: posts, categories: categories, compositions: compositions }
// }
export async function getInitialDataAside() {
  let categories = []
  let compositions = []
  let resCate = await Axios.get(config.host.base + config.path.base.categories, {
    timeout: 5000,
  }).catch((e) => {
    console.log('Error: ', e.code)
  })
  let resCompos = await Axios.get(config.host.base + config.path.base.compositions, {
    timeout: 5000,
  }).catch((e) => console.log('Error: ', e.code))
  categories = resCate && resCate.data != undefined ? resCate.data : []
  compositions = (resCompos && resCompos.data) != undefined ? resCompos.data : []
  console.log(compositions)

  return { compositions: compositions, categories: categories }
}
