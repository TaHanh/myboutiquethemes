import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import '../static/styles/post.scss'
import { useState } from 'react'
import Axios from 'axios'
import { uploadCallback } from '../utils/upload'
function Post(props) {
  const [imgSrc, setImg] = useState('')
  const [file, setFile] = useState('')
  const refFile = React.createRef()
  const [valueTxt, setValue] = useState('')

  const changeImg = (file) => {
    // var reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onloadend = function (e) {
    //   setImg(reader.result)
    // }.bind(this)
    setImg(URL.createObjectURL(file))
    setFile(file)
  }
  const callBack = (key, value) => {
    console.log(key, value)

    switch (key) {
      case 'EDITOR':
        break
      case 'UPFILE':
        uploadCallback(value)
          .then((res) => {
            console.log(res.imageLink)
          })
          .catch((err) => {
            console.log('err', err)
          })
        break
      default:
        break
    }
  }
  // const uploadCallback = (file) => {
  //   return new Promise((resolve, reject) => {
  //     let formData = new FormData()
  //     formData.append('image', file)
  //     Axios.post('http://1.2.3.127:9000/multers', formData, {
  //       'Content-Type': 'multipart/form-data',
  //     })
  //       .then((res) => {
  //         resolve({ data: { link: res.data } })
  //       })
  //       .catch((err) => {
  //         console.log('error upload ', err)
  //       })
  //   })
  // }
  return (
    <Layout title={'Blush'}>
      <div className='post px-md-4 px-3'>
        <div className='py-md-5 pb-5'>
          <div className='row'>
            <div className='col-md-8 mb-md-0 mb-3'>
              <h5>Tiêu đề</h5>
              <input type='text' className='form-control' multiple />
            </div>
            <div className='col-md-4'>
              <div className='post-image'>
                <input ref={refFile} type='file' onChange={(e) => changeImg(e.target.files[0])} className='d-none' />

                <div className='border border-secondary post-image-container' title='Ảnh bài viết'>
                  {imgSrc ? (
                    <img src={imgSrc} style={{ objectFit: 'cover' }} className='w-100 h-100' />
                  ) : (
                    <p>Ảnh bài viết</p>
                  )}
                  <button
                    className='btn btn-outline-danger mr-5 post-image-btn'
                    onClick={() => {
                      refFile.current.click()
                    }}
                  >
                    <i class='fas fa-upload'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className='mb-3'>Nội dung bài viết</h5>
          <WysiwygEditor callBack={callBack} valueTxt={valueTxt} />
        </div>
        <div className='row justify-content-center pt-5 mx-0'>
          <button
            type='button'
            class='btn btn-danger text-uppercase font-weight-bold'
            onClick={() => callBack('UPFILE', file)}
          >
            Đăng bài
          </button>
        </div>
      </div>
    </Layout>
  )
}
export default Post
