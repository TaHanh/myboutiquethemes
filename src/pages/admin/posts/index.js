import Layout from '../../../components/layout'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import config from '../../../config'
import Axios from 'axios'
import getInitialData from '../../../store/data'
import { convertTitle } from '../../../utils/convert'
import { observer, inject } from 'mobx-react'
import Cookies from 'universal-cookie'
import Router from 'next/router'
const limit = 20
const PostsAd = (props) => {
  const [data, setData] = useState(props.data)
  const [isLoad, setLoad] = useState(false)
  const [isLoadBtn, setLoadBtn] = useState(true)
  const [page, setPage] = useState(1)

  console.log('PostDetail', props.store.likesCount)
  useEffect(() => {
    console.log('PostDetail', props.store.likesCount)
  }, [])

  const loadMore = () => {
    setLoad(true)
    let pageNew = page + 1
    setPage(pageNew)
    console.log(pageNew)

    Axios.get(config.host.base + config.path.base.posts + '?page=' + pageNew + '&&limit=' + limit)
      .then((res) => {
        if (res.data.length > 0) {
          // data = data.concat(res.data);
          setData(data.concat(res.data))
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
                <button
                  className='btn btn-primary rounded-circle'
                  title='Tạo bài viết'
                  style={{ width: 50, height: 50 }}
                >
                  <i className='fas fa-pen' style={{ fontSize: 25 }}></i>
                </button>
              </a>
            </Link>
          </div>
          <div className='row'>
            {data && data.length > 0 ? (
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
                          {/* <p className='max-line'>{item.description}</p> */}

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
              })
            ) : (
              <h4 className='my-5'>Không có bài viết nào phù hợp !</h4>
            )}
          </div>

          <div className='row justify-content-center'>
            {isLoadBtn ? (
              isLoad ? (
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
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

PostsAd.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx
  let data = {}
  // const cookies = new Cookies();
  let user = new Cookies().get('user')

  if (user) {
    let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit).catch((e) => {
      console.log('Error: ', e.code)
    })
    data = resPost && resPost.data != undefined ? resPost.data : []
    return { data: data }
  } else {
    Router.push('/')
  }
  return
}

export default inject('store')(observer(PostsAd))
