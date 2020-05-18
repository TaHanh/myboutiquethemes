import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { uploadCallback } from '../utils/upload'
import config from '../config'
import getInitialData from '../store/data'
import MultiSelect from '@khanacademy/react-multi-select'
function Post(props) {
  const [imgSrc, setImg] = useState('')
  const [file, setFile] = useState('')
  const refFile = React.createRef()
  const [data, setData] = useState({
    title: '',
    content: '',
    description: '',
    viewCount: 0,
    image: '',
    idCategory: '',
    idCreator: '',
    tags: [],
    composition: [],
  })
  const [optionComposition, setoptionComposition] = useState([])
  const [selectedCompos, setSelectedCompos] = useState([])

  useEffect(() => {
    const compos = props.compositions.map((item) => {
      return { ...item, label: item.name, value: item.id }
    })
    setoptionComposition(compos)
  }, [])

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
        setData({ ...data, content: value })
        break
      case 'UPFILE':
        uploadCallback(value)
          .then((res) => {
            console.log(res)
            setData({ ...data, image: res.imageLink })
          })
          .catch((err) => {
            console.log('err', err)
          })
        break
      case 'POST':
        const tags = data.tags.filter((item, index) => {
          return item != ''
        })
        callBack('UPFILE', file)
        console.log(tags)
        console.log(data)
        break
      default:
        break
    }
  }

  return (
    <Layout title={'Blush'}>
      <div className='post px-md-4 px-3'>
        <div className='pt-5 pb-md-3 pb-3'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='mb-3'>
                <h5>Tiêu đề</h5>
                <input
                  type='text'
                  className='form-control'
                  multiple
                  onChange={(e) => {
                    setData({ ...data, title: e.target.value })
                  }}
                />
              </div>
              <div className='mb-3'>
                <h5>Mô tả ngắn</h5>
                <input
                  type='text'
                  className='form-control'
                  multiple
                  onChange={(e) => {
                    setData({ ...data, description: e.target.value })
                  }}
                />
              </div>
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
                    className='btn btn-outline-danger post-image-btn'
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
        <div className='row justify-content-between'>
          <div className='col-5'>
            <div class='form-group mb-3'>
              <h5 for='exampleFormControlSelect1'>Danh mục</h5>
              <select
                class='form-control'
                onChange={(e) => {
                  setData({ ...data, idCategory: e.target.value })
                }}
              >
                {props.categories &&
                  props.categories.map((item, index) => {
                    return (
                      <option
                        value={item.id}
                        selected={data.idCategory != '' ? data.idCategory : props.categories[0].id}
                      >
                        {item.name}
                      </option>
                    )
                  })}
              </select>
            </div>
          </div>
          <div className='col-5'>
            <div class='post-compos mb-3'>
              <h5>Thành phần</h5>
              <MultiSelect
                options={optionComposition}
                selected={data.composition}
                onSelectedChanged={(selected) => {
                  console.log(selected)
                  setData({ ...data, composition: selected })
                  // setSelectedCompos(selected)
                }}
                overrideStrings={{
                  selectSomeItems: 'Chọn ít nhất một thành phần...',
                  allItemsAreSelected: 'Tất cả được chọn',
                  selectAll: 'Chọn tất cả',
                  search: 'Tìm kiếm',
                }}
              />
              {/* <select class='form-control' id='exampleFormControlSelect1'>
               {props.compositions &&
                  props.compositions.map((item, index) => {
                    return <option>{item.name}</option>
                  })}
              </select> */}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='mb-3'>
              <h5>Tags</h5>
              <input
                type='text'
                className='form-control'
                multiple
                placeholder='Ví dụ nhập tags: Mụn,Dầu,Da Khô'
                value={data.tags.join(',')}
                onChange={(e) => {
                  setData({ ...data, tags: e.target.value.split(',') })
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className='mb-3'>Nội dung bài viết</h5>
          <WysiwygEditor callBack={callBack} valueTxt={data.description} />
        </div>
        <div className='row justify-content-center pt-5 mx-0'>
          <button
            type='button'
            class='btn btn-danger text-uppercase font-weight-bold'
            onClick={() => callBack('POST', data)}
          >
            Đăng bài
          </button>
        </div>
      </div>
    </Layout>
  )
}

Post.getInitialProps = async function () {
  const data = getInitialData()
  return data
}

export default Post
