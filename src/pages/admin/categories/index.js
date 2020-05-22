import Layout from '../../../components/layout'
import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../../config'
import '../../../static/styles/composition.scss'

function Composition(props) {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [isLoad, setLoad] = useState(false)
  useEffect(() => {
    setData(props.categories)
  }, [])
  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'POST_COMPOSITON':
        if (value != '') {
          setLoad(true)
          Axios.post(
            config.host.base + config.path.base.categories,
            {
              name: value,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + config.host.token,
              },
            }
          )
            .then((res) => {
              data.unshift(res.data)
              setData(data)
              toast.success('Thêm thành công !', { autoClose: 3000 })
              setValue('')
            })
            .catch((err) => {
              console.log('POST_COMPOSITON', err)
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
        console.log(config.host.base + config.path.base.categories + '/' + value.item.id)

        Axios.delete(config.host.base + config.path.base.categories + '/' + value.item.id, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + config.host.token,
          },
        })
          .then((res) => {
            data.splice(value.index, 1)
            setData(data)
            toast.success('Xoá thành công !', { autoClose: 3000 })
          })
          .catch((err) => {
            console.log('POST_COMPOSITON', err)
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
    <Layout title={'Danh mục'}>
      <div className='composition px-md-4 px-3'>
        <div className='py-md-5 pb-5'>
          <div className='row align-items-end'>
            <div className='col-9'>
              <h5>Danh mục</h5>
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
                    callBack('POST_COMPOSITON', value)
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
                  onClick={() => callBack('POST_COMPOSITON', value)}
                >
                  Thêm
                </button>
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          {data &&
            data.map((item, index) => {
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

Composition.getInitialProps = async function () {
  let categories = []

  let res = await Axios.get(config.host.base + config.path.base.categories).catch((e) => console.log('Error: ', e.code))
  categories = res && res.data ? res.data : []
  return { categories: categories }
}

export default Composition
