import config from '../config'
import axios from 'axios'

export const upload = (file) => {
  const headers = { 'Content-Type': 'multipart/form-data' }

  let formData = new FormData()
  formData.append('file[]', file)

  return axios
    .post(config.host.upload + '/uploads', formData, {
      headers,
    })
    .then((res) => res.data)
}
export const uploadCallback = (file) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData()
    formData.append('image', file)
    axios
      .post(
        'http://1.2.3.127:9000/multers?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTgwMTQ3NH0.E6KhxBFFZZ7mqBuMcg_1_vuyycEF6APiHLTfhkXFiO8',
        formData,
        {
          'Content-Type': 'multipart/form-data',
        }
      )
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
        // console.log('error upload ', err)
      })
  })
}
