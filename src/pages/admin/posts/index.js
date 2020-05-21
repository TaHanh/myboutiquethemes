import Layout from '../../../components/layout'
import Swiper from 'react-id-swiper'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import config from '../../../config'
import Axios from 'axios'
import getInitialData from '../../../store/data'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../../store/redux'
import { convertTitle } from '../../../utils/convert'
const limit = 20
const Tags = (props) => {
  const [data, setData] = useState(props.data)
  const [isLoad, setLoad] = useState(false)
  const [isLoadBtn, setLoadBtn] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(() => {}, [])

  const loadMore = () => {
    setLoad(true)
    let pageNew = page + 1
    setPage(pageNew)
    Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit)
      .then((res) => {
        if (res.data.length > 0) {
          const newData = data.concat(res.data)
          setData(newData)
          if (res.data.length < limit) {
            setLoadBtn(false)
          }
        } else {
          setLoadBtn(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally((fil) => {
        setLoad(false)
      })
  }
  return (
    <Layout title={'Blush'}>
      <div className='site-content'>
        <div className='site-main'>
          <div className='row justify-content-end mx-3 mb-3'>
            <Link href={config.client.adminPostDetail}>
              <a>
                <button className='btn btn-primary btn-lg rounded-circle' title='Tạo bài viết'>
                  {/* <i class='fas fa-edit'></i> */}
                  <i class='fas fa-pen'></i>
                </button>
              </a>
            </Link>
          </div>
          <div className='row'>
            {data &&
              data.map((item, index) => {
                return (
                  <div className='col-xl-3 xol-lg-4 col-md-6 col-12'>
                    <div className='card-post'>
                      <div className='card-entry-thumbnail'>
                        <Link
                          href={config.client.adminPostDetail + '?id=' + convertTitle(item.title) + '_' + item.idPost}
                        >
                          <a>
                            <div
                              style={{
                                backgroundImage: 'url(' + `${config.host.upload + item.image}` + ')',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                              }}
                            >
                              <img style={{ visibility: 'hidden' }} src={require('../../../static/images/f1.jpg')} />
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className='card-entry-body'>
                        <div className='card-entry-header'>
                          <h2 className='card-entry-title max-line'>
                            <Link href={config.client.posts + '/' + convertTitle(item.title) + '_' + item.idPost}>
                              <a>{item.title}</a>
                            </Link>
                          </h2>
                        </div>
                        <div className='card-entry-content'>
                          {/* <p class='max-line'>{item.description}</p> */}

                          <div className='card-entry-meta'>
                            {item.tags &&
                              item.tags.map((e, i) => {
                                return (
                                  <Link href={config.client.tags + convertTitle(e)}>
                                    <a>
                                      {e} {i != item.tags.length - 1 ? ', ' : null}
                                    </a>
                                  </Link>
                                )
                              })}
                          </div>
                          <Link href={config.client.posts + '/' + convertTitle(item.title) + '_' + item.idPost}>
                            <a className='readmore'>
                              <button className='btn read-more'>Read more</button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

          <div className='row justify-content-center'>
            {isLoadBtn ? (
              isLoad ? (
                <div class='spinner-border text-primary' role='status'>
                  <span class='sr-only'>Loading...</span>
                </div>
              ) : (
                <div className='readmore'>
                  <button className='btn read-more' onClick={() => loadMore()}>
                    read more
                  </button>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Tags.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx
  let data = {}
  let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit).catch((e) => {
    console.log('Error: ', e.code)
  })

  data = resPost && resPost.data != undefined ? resPost.data : []

  return { data: data }
}

export default Tags
