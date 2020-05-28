import WysiwygEditor from '../../../components/wysiwyg-editor'
import Layout from '../../../components/layout'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { uploadCallback } from '../../../utils/upload'
import config from '../../../config'
import MultiSelect from '@khanacademy/react-multi-select'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getInitialDataAside } from '../../../store/data'
import Router from 'next/router'
import Cookies from 'universal-cookie'
function AdPostDetail(props) {
  const [imgSrc, setImg] = useState('')
  const [isLoad, setLoad] = useState(false)
  const [file, setFile] = useState('')
  const [tags, setTag] = useState('')
  const refFile = React.createRef()
  const [data, setData] = useState({
    title: '',
    content: '',
    description: '',
    viewCount: 0,
    image: '',
    idCategory: '',
    idCreator: '5eb91ac9be4f1e373075d1b3',
    tags: [],
    compositions: [],
  })
  const [optionComposition, setoptionComposition] = useState([])
  const [selectedCompos, setSelectedCompos] = useState([])
  // console.log(props.data);

  useEffect(() => {
    console.log(props.data)
    if (props.isData) {
      const compos = props.compositions.map((item) => {
        return { ...item, label: item.name, value: item.id }
      })
      setoptionComposition(compos)

      if (props.data.id) {
        setData(props.data)
        setTag(props.data.tags.join(','))
        setImg(config.host.base + props.data.image)
      } else if (data.idCategory == '' && props.categories.length > 0) {
        data.idCategory = props.categories[0].id
        setData(data)
      }
    }
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
    let newData = {}
    let newTags = []
    switch (key) {
      case 'EDITOR':
        setData({ ...data, content: value })
        break
      case 'POST':
        newTags = tags.split(',').filter((item, index) => {
          return item != ''
        })
        newData = { ...data, tags: newTags }
        setData(newData)
        console.log(newData)
        if (file == '') {
          toast.error('Bạn chưa đăng ảnh bài viết !', { autoClose: 3000 })
          console.log('file')
        } else if (
          newData.title == '' ||
          newData.content == '' ||
          newData.description == '' ||
          newData.compositions.length == 0 ||
          newData.tags.length == 0
        ) {
          console.log('key')
          toast.error('Bạn phải nhập đầy đủ thông tin !', { autoClose: 3000 })
        } else {
          console.log(newData)
          post(newData)
        }

        break
      case 'UPDATE':
        newTags = tags.split(',').filter((item, index) => {
          return item != ''
        })

        newData = { ...value, tags: newTags }
        setData(newData)
        if (
          newData.title == '' ||
          newData.content == '' ||
          newData.description == '' ||
          newData.compositions.length == 0 ||
          newData.tags.length == 0
        ) {
          console.log('key')
          toast.error('Bạn phải nhập đầy đủ thông tin !', { autoClose: 3000 })
        } else {
          console.log(newData)

          setLoad(true)

          if (file != '') {
            let image = ''

            uploadCallback(file)
              .then((res) => {
                console.log(res)
                image = res.imageLink
              })

              .then(() => {
                let dataaa = { ...newData, image: image }
                setData(dataaa)
                update(dataaa).then((r) => {
                  setLoad(false)
                })
              })
              .catch((err) => {
                toast.error('Đăng ảnh bài viết không thành công !', {
                  autoClose: 3000,
                })
                console.log('err', err)
              })
          } else {
            update(newData).then((r) => {
              setLoad(false)
            })
          }
        }
        break
      case 'DELETE':
        setLoad(true)
        Axios.delete(config.host.base + config.path.base.posts + '/' + value.id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + new Cookies().get('user').token,
          },
        })
          .then((res) => {
            console.log(res)
            toast.success('Xoá bài viết thành công!', { autoClose: 3000 })
            Router.back()
          })
          .catch((e) => {
            toast.error('Xoá bài viết không thành công !', { autoClose: 3000 })
            console.log('Error: ', e)
          })
          .finally((fil) => {
            setLoad(false)
          })
        break
      default:
        break
    }
  }
  const post = (value) => {
    console.log(file)
    let image = ''
    setLoad(true)
    uploadCallback(file)
      .then((res) => {
        console.log(res)
        image = res.imageLink
      })

      .then(() => {
        let dataa = { ...value, image: image }
        setData(dataa)
        Axios.post(config.host.base + config.path.base.posts, dataa, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + new Cookies().get('user').token,
          },
        })
          .then((res2) => {
            console.log(res2)
            toast.success('Thêm bài thành công!', { autoClose: 3000 })
          })
          .catch((e) => {
            toast.error('Đăng bài không thành công !', { autoClose: 3000 })
            console.log('Error: ', e)
          })
          .finally((fil) => {
            setLoad(false)
          })
      })
      .catch((err) => {
        toast.error('Đăng ảnh bài viết không thành công !', {
          autoClose: 3000,
        })
        console.log('err', err)
      })
  }

  const update = async (value) => {
    await Axios.put(config.host.base + config.path.base.posts + '/' + value.id, value, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + new Cookies().get('user').token,
      },
    })
      .then((res) => {
        console.log(res)
        toast.success('Cập nhật bài thành công!', { autoClose: 3000 })
      })
      .catch((e) => {
        toast.error('Cập nhật bài không thành công !', { autoClose: 3000 })
        console.log('Error: ', e)
      })
  }
  return (
    <Layout title={'Blush'}>
      {props.isData ? (
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
                    value={data.title}
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
                    value={data.description}
                    onChange={(e) => {
                      setData({ ...data, description: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='post-image'>
                  <input ref={refFile} type='file' onChange={(e) => changeImg(e.target.files[0])} className='d-none' />

                  <div className='border border-secondary post-image-container'>
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
                      <i className='fas fa-upload'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-8'>
              <div className='form-group mb-3'>
                <h5 for='exampleFormControlSelect1'>Danh mục</h5>
                <select
                  className='form-control'
                  onChange={(e) => {
                    console.log(e.target.value)
                    setData({ ...data, idCategory: e.target.value })
                  }}
                >
                  {props.categories &&
                    props.categories.map((item, index) => {
                      return (
                        <option value={item.id} selected={data.idCategory == props.categories[index].id ? true : false}>
                          {item.name}
                        </option>
                      )
                    })}
                </select>
              </div>
            </div>
            <div className='col-8'>
              <div className='post-compos mb-3'>
                <h5>Thành phần</h5>
                <MultiSelect
                  options={optionComposition}
                  selected={data.compositions}
                  onSelectedChanged={(selected) => {
                    setData({ ...data, compositions: selected })
                  }}
                  overrideStrings={{
                    selectSomeItems: 'Chọn ít nhất một thành phần...',
                    allItemsAreSelected: 'Tất cả được chọn',
                    selectAll: 'Chọn tất cả',
                    search: 'Tìm kiếm',
                  }}
                />
                {/* <select className='form-control' id='exampleFormControlSelect1'>
               {props.compositions &&
                  props.compositions.map((item, index) => {
                    return <option>{item.name}</option>
                  })}
              </select> */}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='mb-3'>
                <h5>Tags</h5>
                <div className='tags row mx-0 mb-3'>
                  <span>Có thể chọn thẻ tags có sẵn: </span>

                  {props.tags &&
                    props.tags.map((t, i) => {
                      return (
                        <button
                          type='button'
                          className='badge  btn-outline-primary ml-3'
                          onClick={() => {
                            let newTags = ''
                            if (tags != '') {
                              newTags = tags + ',' + t
                            } else {
                              newTags = t
                            }

                            setTag(newTags)
                          }}
                        >
                          {t}
                        </button>
                      )
                    })}
                </div>
                <input
                  type='text'
                  className='form-control'
                  multiple
                  placeholder='Ví dụ nhập tags: Mụn,Dầu,Da Khô'
                  value={tags}
                  onChange={(e) => {
                    setTag(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className='mb-3'>Nội dung bài viết</h5>
            <WysiwygEditor callBack={callBack} content={props.data.content} />
          </div>
          <div className=' pt-5 mx-0'>
            {isLoad ? (
              <div className='row justify-content-center'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            ) : data.id ? (
              <div className='row justify-content-between mx-0'>
                {/* <div></div> */}
                <button
                  type='button'
                  className='btn btn-danger text-uppercase font-weight-bold'
                  onClick={() => callBack('DELETE', data)}
                >
                  Xoá bài viết
                </button>
                <button
                  type='button'
                  className='btn btn-primary text-uppercase font-weight-bold'
                  onClick={() => callBack('UPDATE', data)}
                >
                  Cập nhật bài viết
                </button>
              </div>
            ) : (
              <div className='row justify-content-center'>
                <button
                  type='button'
                  className='btn btn-danger text-uppercase font-weight-bold'
                  onClick={() => callBack('POST', data)}
                >
                  Đăng bài
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='pt-5'>
          <h4>Hiện tại hệ thống đang lỗi !</h4>
        </div>
      )}
    </Layout>
  )
}

AdPostDetail.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx
  const cookies = new Cookies()
  let user = cookies.get('user')
  if (user) {
    let dataPost = {}
    let tags = {}
    let resTag = await Axios.get(config.host.base + config.path.base.tags).catch((e) => {
      console.log('Error: ', e.code)
    })

    tags = resTag && resTag.data != undefined ? resTag.data : []

    if (query.id) {
      let resPost = await Axios.get(config.host.base + config.path.base.posts + '/' + query.id).catch((e) => {
        console.log('Error: ', e.response)
        Router.push(config.client.adminPostDetail)
      })
      dataPost = resPost && resPost.data != undefined ? resPost.data : []
    }

    const dataa = await getInitialDataAside()
    if (dataa.categories.length == 0 && dataa.compositions.length == 0) {
      return { isData: false }
    }
    return { ...dataa, isData: true, data: dataPost, tags: tags }
  } else {
    Router.push('/')
  }
  return
}

export default AdPostDetail
