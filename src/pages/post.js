import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import '../static/styles/post.scss'
import { useState } from 'react'
function Post(props) {
  const [imgSrc, setImg] = useState('')
  const refFile = React.createRef()
  const [valueTxt, setValue] = useState('<b>fjdhfj</b>')
  const changeImg = (file) => {
    // var reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onloadend = function (e) {
    //   setImg(reader.result)
    // }.bind(this)
    setImg(URL.createObjectURL(file))
  }
  const callBack = (key, value) => {
    switch (key) {
      case 'EDITOR':
        console.log(value)
        break

      default:
        break
    }
  }
  return (
    <Layout title={'Blush'}>
      <div>
        <input ref={refFile} type='file' onChange={(e) => changeImg(e.target.files[0])} className='d-none' />
        <button
          className='ui button'
          onClick={() => {
            refFile.current.click()
          }}
        >
          Image Upload
        </button>
        {imgSrc ? <img src={imgSrc} /> : null}
      </div>
      <WysiwygEditor callBack={callBack} valueTxt={valueTxt} />
    </Layout>
  )
}
export default Post
