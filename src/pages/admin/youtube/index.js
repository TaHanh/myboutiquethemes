import Layout from '../../../components/layout'
import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../../config'
import '../../../static/styles/composition.scss'
import Cookies from 'universal-cookie'
import { getParamsURL } from '../../../utils/convert'
import Router from 'next/router'

function Youtube(props) {
  const [data, setData] = useState(props.data)
  const [value, setValue] = useState('')
  const [isLoad, setLoad] = useState(false)
  const [token, setToken] = useState('')
  useEffect(() => {
    let tk = new Cookies().get('user')
    console.log(tk)
    if (tk) {
      setToken(tk.token)
    }
  }, [])
  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'POST':
        if (value != '') {
          setLoad(true)
          Axios.post(
            config.host.base + config.path.base.youtubes,
            {
              title: '',
              link: value,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            }
          )
            .then((res) => {
              console.log(res.data)
              data.rows.unshift(res.data)
              setData(data)
              toast.success('Thêm thành công !', { autoClose: 3000 })
              setValue('')
            })
            .catch((err) => {
              console.log('POST', err)
              toast.error('Không thành công !', { autoClose: 3000 })
            })
            .finally((fil) => {
              setLoad(false)
            })
        } else {
          toast.error('Bạn chưa nhập thành phần !', { autoClose: 3000 })
        }

        break
      case 'DELETE':
        setLoad(true)
        Axios.delete(config.host.base + config.path.base.youtubes + '/' + value.item.id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
          .then((res) => {
            data.rows.splice(value.index, 1)
            setData(data)
            toast.success('Xoá thành công !', { autoClose: 3000 })
          })
          .catch((err) => {
            console.log('POST', err)
            toast.error('Không thành công !', { autoClose: 3000 })
          })
          .finally((fil) => {
            setLoad(false)
          })
        break
      default:
        break
    }
  }

  const changeInput = (value) => {
    setValue(value.target.value)
  }

  return (
    <Layout title={"Glowish's Youtube"}>
      <div className='composition px-md-4 px-3'>
        <div className='py-5'>
          <div className='row align-items-end'>
            <div className='col-xl-6 col-lg-7 col-sm-9 col-12'>
              <input
                type='text'
                className='form-control mb-sm-0 mb-3'
                multiple
                value={value}
                onChange={(e) => {
                  changeInput(e)
                }}
                onKeyPress={(e) => {
                  if (e.key == 'Enter') {
                    callBack('POST', value)
                  }
                }}
                placeholder='Thêm link youtube'
              />
            </div>
            <div className='col-3'>
              {isLoad ? (
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              ) : (
                <button
                  type='button'
                  className='btn btn-primary text-uppercase font-weight-bold'
                  onClick={() => callBack('POST', value)}
                >
                  Thêm
                </button>
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          {data &&
            data.rows &&
            data.rows.map((item, index) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <li className='list-group-item text-center my-3'>
                    <iframe
                      width='100%'
                      src={'https://www.youtube.com/embed/' + getParamsURL(item.link)}
                      frameborder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    ></iframe>
                    <button
                      className='btn btn-outline-danger btn-sm'
                      onClick={() => callBack('DELETE', { item, index })}
                    >
                      Xoá
                    </button>
                    {/* <span
                      className='badge badge-danger cursor-pointer ml-2'
                    
                    >
                      <span ariaHidden='true'>&times;</span>
                    </span> */}
                  </li>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

Youtube.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx
  let data = []
  const cookies = new Cookies()
  let user = cookies.get('user')
  if (user) {
    let resData = await Axios.get(config.host.base + config.path.base.youtubes).catch((e) =>
      console.log('Error: ', e.code)
    )
    console.log(resData)
    data = resData && resData.data ? resData.data : []
    return { data: data }
  } else {
    Router.push('/')
  }
}

export default Youtube
