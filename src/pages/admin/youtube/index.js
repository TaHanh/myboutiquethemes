import Layout from '../../../components/layout'
import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../../config'
import '../../../static/styles/composition.scss'
import Cookies from 'universal-cookie'

function Youtube(props) {
  const [data, setData] = useState(props.data)
  const [value, setValue] = useState('')
  const [isLoad, setLoad] = useState(false)
  const [token, setToken] = useState('')
  useEffect(() => {
    setToken(new Cookies().get('user').token)
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
              // data.unshift(res.data)
              // setData(data)
              // toast.success('Thêm thành công !', { autoClose: 3000 })
              // setValue('')
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
        Axios.delete(config.host.base + config.path.base.compositions + '/' + value.item.id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + new Cookies().get('user').token,
          },
        })
          .then((res) => {
            data.splice(value.index, 1)
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
    <Layout title={'Thành phần'}>
      <div className='composition px-md-4 px-3'>
        <div className='py-md-5 pb-5'>
          <div className='row align-items-end'>
            <div className='col-9'>
              <h5>Thành phần</h5>
              <input
                type='text'
                className='form-control'
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
                  <li className='list-group-item d-flex justify-content-between align-items-center px-3 my-3'>
                    {item.name}
                    <span
                      className='badge badge-danger cursor-pointer ml-2'
                      onClick={() => callBack('DELETE', { item, index })}
                    >
                      <span ariaHidden='true'>&times;</span>
                    </span>
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
  let data = []
  const { req, res, query } = ctx
  // const cookies = new Cookies()
  // let user = cookies.get('user')
  // if (user) {
  //   let resCompos = await Axios.get(config.host.base + config.path.base.compositions).catch((e) =>
  //     console.log('Error: ', e.code)
  //   )
  //   compositions = (resCompos && resCompos.data) || []
  //   return { compositions: compositions }
  // } else {
  //   res.redirect('/')
  // }

  let resCompos = await Axios.get(config.host.base + config.path.base.youtubes).catch((e) =>
    console.log('Error: ', e.code)
  )
  data = (data && data.data) || []
  return { data: data }
  return
}

export default Youtube
