import Layout from '../components/layout'
import '../static/styles/home.scss'
import Aside from '../components/aside'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import config from '../config'
import Axios from 'axios'
import { getInitialDataAside } from '../store/data'
import { convertTitle } from '../utils/convert'
import Router from 'next/router'
import { observer, inject } from 'mobx-react'
import storeInstance from '../store/store'

let limit = 10

const Home = (props) => {
  const [data, setData] = useState(props.posts)
  const [videos, setVide] = useState([
    { src: 'https://www.youtube.com/embed/VFKnbQrd9ow' },
    { src: 'https://www.youtube.com/embed/6csZtc1m9rI' },
    { src: 'https://www.youtube.com/embed/DhFE0aIKb8Q' },
  ])
  const [isLoad, setLoad] = useState(false)
  const [isLoadBtn, setLoadBtn] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (data.length < limit) {
      setLoadBtn(false)
    }
  }, [])

  const callBack = (key, value) => {}

  const loadMore = () => {
    setLoad(true)
    let pageNew = page + 1
    setPage(pageNew)
    Axios.get(config.host.base + config.path.base.posts + '?page=' + page + '&&limit=' + limit)
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
      <div className='site-branding'>
        <Link href='/blush-classic'>
          <img src={require('../static/images/blush_title.png')} />
        </Link>
      </div>
      <div className='site-content'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='site-main'>
              <div className='home-entry-thumbnail' onClick={() => postUser()}>
                <img src={require('../static/images/the_tonik_b.jpg')} />
              </div>
              <div className='home-entry-body'>
                <div className='home-entry-header'>
                  <div className='home-entry-meta'>
                    <a href='https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/'>LIFESTYLE</a>,
                    <a href='https://demo.myboutiquethemes.com/blush-classic/category/travel/'> TRAVEL</a>
                  </div>
                  <h1 className='home-entry-title'>WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS</h1>
                </div>
                <div className='home-entry-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam …
                  </p>
                  {/* <div className='shop-the-post'>
                  <h3>Shop this Post</h3>
                  <div className='shop-the-post-container'>
                    <p></p>
                    <SwiperComponent params={params} />
                  </div>
                </div> */}
                  {/* <a
                  className='readmore'
                  href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'
                >
                  <button className='btn read-more'>Read more</button>
                </a> */}
                </div>
                {/* <div className='home-entry-footer'>
                <a
                  className='comments-link'
                  href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/#respond'
                >
                  Leave a Comment
                </a>
                <div className='share'>
                  <a
                    href='mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'
                    target='_blank'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <a
                    href='http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer'
                    target='_blank'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a
                    href='https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg'
                    target='_blank'
                  >
                    <i className='fab fa-pinterest'></i>
                  </a>
                  <a href='https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </div>
              </div> */}
              </div>
              <div className='row'>
                {data &&
                  data.map((item, index) => {
                    return (
                      <div className='col-md-6 col-12' key={index}>
                        <div className='card-post'>
                          <div className='card-entry-thumbnail'>
                            <Link
                              href={
                                config.client.posts +
                                '/' +
                                convertTitle(item.title) +
                                '_' +
                                item.idPost +
                                '?category=' +
                                item.idCategory
                              }
                            >
                              <a>
                                <div
                                  style={{
                                    backgroundImage: 'url(' + `${config.host.upload + item.image}` + ')',
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                  }}
                                >
                                  <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
                                </div>
                              </a>
                            </Link>
                          </div>
                          <div className='card-entry-body'>
                            <div className='card-entry-header'>
                              <h2 className='card-entry-title max-line'>
                                <Link
                                  href={
                                    config.client.posts +
                                    '/' +
                                    convertTitle(item.title) +
                                    '_' +
                                    item.idPost +
                                    '?category=' +
                                    item.idCategory
                                  }
                                >
                                  <a>{item.title}</a>
                                </Link>
                              </h2>
                            </div>
                            <div className='card-entry-content'>
                              <p className='max-line'>{item.description}</p>

                              <div className='card-entry-meta'>
                                {item.tags &&
                                  item.tags.map((e, i) => {
                                    return (
                                      <Link href={config.client.tags + e}>
                                        <a>
                                          {e} {i != item.tags.length - 1 ? ', ' : null}
                                        </a>
                                      </Link>
                                    )
                                  })}
                              </div>
                              <Link
                                href={
                                  config.client.posts +
                                  '/' +
                                  convertTitle(item.title) +
                                  '_' +
                                  item.idPost +
                                  '?category=' +
                                  item.idCategory
                                }
                              >
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
          <div className='col-lg-4'>
            <Aside compositions={props.compositions} categories={props.categories} />
          </div>
        </div>
      </div>
      <div className='after-content-home'>
        <h2 className='widgettitle'>Follow our Youtube Glowish Official</h2>
        <div className='youtube-gallery'>
          <div className='row'>
            {/* <div className='col-md-4'>
              <div className='youtube-video'>
                <a
                  href='https://www.youtube.com/watch?v=5S4y_GpaU-c'
                  title='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                  target='_blank'
                  rel='nofollow'
                >
                  <div className='youtube-thumb'>
                    <img
                      className='w-100'
                      src={require('../static/images/yt1.jpg')}
                      alt='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                    />
                    <img className='icon' src={require('../static/images/ic_play_red.png')} />
                  </div>
                  <h3 className='video-title'>CHANGE YOUR APPEARANCE with LOA &amp; Self-Love</h3>
                </a>
              </div>
            </div> */}

            {videos.map((item, index) => {
              return (
                <div className='col-md-4 col-sm-6'>
                  <iframe
                    width='100%'
                    src={item.src}
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                    className=' pb-3'
                  ></iframe>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function (ctx) {
  let posts = {}
  let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit, {
    timeout: 5000,
  }).catch((e) => {
    console.log('Error: ', e.code)
  })
  posts = resPost && resPost.data != undefined ? resPost.data : []
  let data = await getInitialDataAside()
  return { ...data, posts: posts }
}

export default inject('store')(observer(Home))
