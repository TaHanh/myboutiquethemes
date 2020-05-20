import Layout from '../../../components/layout'
import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../../config'
import '../../static/styles/composition.scss'

function Composition(props) {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [isLoad, setLoad] = useState(false)
  useEffect(() => {
    setData(props.compositions)
  }, [])
  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'POST_COMPOSITON':
        if (value != '') {
          setLoad(true)
          Axios.post(config.host.base + config.path.base.compositions, {
            name: value,
          })
            .then((res) => {
              const newArr = data.unshift(res.data)
              setData(newArr)
              console.log('POST_COMPOSITON', res)
              toast.success('Success !', { autoClose: 3000 })
            })
            .catch((err) => {
              console.log('POST_COMPOSITON', err)
              toast.error('Error !', { autoClose: 3000 })
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
        Axios.delete(
          config.host.base + config.path.base.compositions + '/' + value.item.id,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + config.host.token,
            },
          }
        )
          .then((res) => {
            data.splice(value.index, 1)
            setData(data)
            toast.success('Success !', { autoClose: 3000 })
          })
          .catch((err) => {
            console.log('POST_COMPOSITON', err)
            toast.error('Error !', { autoClose: 3000 })
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
          <div className='row'>
            <div className='col-12'>
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
                    callBack('POST_COMPOSITON', value)
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          {props.compositions &&
            props.compositions.map((item, index) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <li class='list-group-item d-flex justify-content-between align-items-center px-3 my-3'>
                    {item.name}
                    <span
                      class='badge badge-danger cursor-pointer ml-2'
                      onClick={() => callBack('DELETE', { item, index })}
                    >
                      <span aria-hidden='true'>&times;</span>
                    </span>
                  </li>
                </div>
              )
            })}
        </div>

        <div className='row justify-content-center pt-5 mx-0'>
          {isLoad ? (
            <div class='spinner-border text-primary' role='status'>
              <span class='sr-only'>Loading...</span>
            </div>
          ) : (
            <button
              type='button'
              class='btn btn-danger text-uppercase font-weight-bold'
              onClick={() => callBack('POST_COMPOSITON', value)}
            >
              Đăng bài
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}

Composition.getInitialProps = async function () {
  let compositions = []

  let resCompos = await Axios.get(config.host.base + config.path.base.compositions).catch((e) =>
    console.log('Error: ', e.code)
  )
  compositions = (resCompos && resCompos.data) || []
  return { compositions: compositions }
}

export default Composition
