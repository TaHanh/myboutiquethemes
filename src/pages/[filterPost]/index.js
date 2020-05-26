import Layout from '../../components/layout'
import { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import config from '../../config'
import '../../static/styles/composition.scss'
import Cookies from 'universal-cookie'
import { getInitialDataAside } from '../../store/data'

function ComposCate(props) {
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
        break

      default:
        break
    }
  }

  const changeInput = (value) => {
    setValue(value.target.value)
  }

  return (
    <Layout title={'Danh mục'} compositions={props.compositions} categories={props.categories}>
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
                  Tìm kiếm
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
                  </li>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

ComposCate.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx

  let data = {}
  switch (query.filterPost) {
    case 'compositions':
      console.log(config.host.base + config.path.base.compositionsPost + query.name + '.' + query.id)
      let resCom = await Axios.get(
        config.host.base + config.path.base.compositionsPost + query.name + '.' + query.id
      ).catch((e) => {
        console.log('Error: ', e.code)
      })
      console.log(resCom.data)
      data = resCom && resCom.data != undefined ? resCom.data : []
      break
    case 'categories':
      console.log(config.host.base + config.path.base.categoriesPosts + query.name + '.' + query.id)
      let resCate = await Axios.get(
        config.host.base + config.path.base.categoriesPosts + query.name + '.' + query.id
      ).catch((e) => {
        console.log('Error: ', e.code)
      })
      console.log(resCate.data)
      data = resCate && resCate.data != undefined ? resCate.data : []
      break

    default:
      break
  }
  return { data: data }
}

export default ComposCate
