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
