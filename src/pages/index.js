import Layout from '../components/layout'
import '../static/styles/home.scss'
import Aside from '../components/aside'
import Swiper from 'react-id-swiper'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import config from '../config'
import Axios from 'axios'
const limit = 2
function Home(props) {
  const [swiper1, updateSwiper1] = useState(null)
  const [swiper2, updateSwiper2] = useState(null)
  const [swiper3, updateSwiper3] = useState(null)
  const [data, setData] = useState([])
  const [isLoad, setLoad] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setData(props.posts)
    console.log('props', props.categories.length, props.posts.length)
  }, [])
  const paramB = {
    slidesPerView: 1,
    loop: true,
  }
  const paramA = {
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      600: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
      425: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      350: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
  }
  const params = {
    slidesPerView: 'auto',
    //  spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },

      700: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      550: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  }
  const imagesGhe = [
    {
      img: require('../static/images/ghe1.jpg'),
    },
    {
      img: require('../static/images/ghe2.jpg'),
    },
    {
      img: require('../static/images/ghe3.jpg'),
    },
    {
      img: require('../static/images/ghe4.jpg'),
    },
    {
      img: require('../static/images/ghe5.jpg'),
    },
    {
      img: require('../static/images/ghe6.jpg'),
    },
    {
      img: require('../static/images/ghe7.jpg'),
    },
  ]
  const imagesUser = [
    {
      img: require('../static/images/u1.jpg'),
      title: 'Yoins',
    },
    {
      img: require('../static/images/u2.jpg'),
      title: '',
      name: '$16.00',
    },
    {
      img: require('../static/images/u3.jpg'),
      title: 'FOREVER21',
      name: '$22.90',
    },
    {
      img: require('../static/images/u4.jpg'),
      title: 'FOREVER21',
      name: '$37.90',
    },
  ]
  const images = [
    {
      img: require('../static/images/u1.jpg'),
    },
    {
      img: require('../static/images/u2.jpg'),
    },
    {
      img: require('../static/images/u3.jpg'),
    },
    {
      img: require('../static/images/u4.jpg'),
    },
  ]
  const stpSlide = (arr, params, updateSwiper, key) => {
    return (
      <div className='shop-container-swiper'>
        <Swiper {...params} getSwiper={updateSwiper}>
          {arr.map((item, index) => {
            return (
              <div className='item-swiper'>
                <a href='#'>
                  <div
                    className='item-swiper-img'
                    style={{
                      backgroundImage: 'url(' + `${item.img}` + ')',
                    }}
                  >
                    <img style={{}} src={arr[1].img} />
                  </div>
                  <div className='item-swiper-title'>
                    {item.title ? <span className='font-weight-bold pt-2'>{item.title}</span> : null}
                    {item.name ? <span className='pt-1'>{item.name}</span> : null}
                  </div>
                </a>
              </div>
            )
          })}
        </Swiper>
        <button className='btn-prev' onClick={() => goPrev(key)}>
          <i class='fas fa-chevron-left'></i>
        </button>
        <button className='btn-next' onClick={() => goNext(key)}>
          <i class='fas fa-chevron-right'></i>
        </button>
      </div>
    )
  }
  const goNext = (key) => {
    switch (key) {
      case 1:
        if (swiper1 !== null) {
          swiper1.slideNext()
        }
        break
      case 2:
        if (swiper2 !== null) {
          swiper2.slideNext()
        }
        break
      case 3:
        if (swiper3 !== null) {
          swiper3.slideNext()
        }
        break
      default:
        break
    }
  }
  const goPrev = (key) => {
    switch (key) {
      case 1:
        if (swiper1 !== null) {
          swiper1.slidePrev()
        }
        break
      case 2:
        if (swiper2 !== null) {
          swiper2.slidePrev()
        }
        break
      case 3:
        if (swiper3 !== null) {
          swiper3.slidePrev()
        }
        break
      default:
        break
    }
  }
  const callBack = (key, value) => {}
  const loadMore = () => {
    setLoad(true)
    let pageNew = page + 1
    setPage(pageNew)
    Axios.get(config.host.base + config.path.base.posts + '?page=' + page + '&&limit=' + limit)
      .then((res) => {
        const newData = data.concat(res.data)
        setData(newData)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally((fil) => {
        setLoad(false)
      })
  }
  const postUser = () => {
    axios
      .get('http://localhost:3000/api/user/5eb3e4674c407c266cad309c')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    // axios
    //   .post('http://localhost:3000/api/user', {
    //     role: 'user',
    //     name: 'Nguyễn Văn Hạnh',
    //     email: 'hanh@mail.com',
    //     password: 'hanh123',
    //     username: 'hanh123',
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // axios
    //   .put('http://localhost:3000/api/user/5eb26679a735a65714fab608', {
    //     role: 'user',
    //     name: 'Nguyễn Văn',
    //     email: 'hanh@mail.com',
    //     password: 'hanh123',
    //     username: 'hanh123',
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // axios
    //   .delete('http://localhost:3000/api/user/5eb26679a735a65714fab608')
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
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
              <div className='entry-thumbnail' onClick={() => postUser()}>
                <img src={require('../static/images/the_tonik_b.jpg')} />
              </div>
              <div className='entry-body'>
                <div className='entry-header'>
                  <div className='entry-meta'>
                    <a href='https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/'>LIFESTYLE</a>,
                    <a href='https://demo.myboutiquethemes.com/blush-classic/category/travel/'> TRAVEL</a>
                  </div>
                  <h1 className='entry-title'>WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS</h1>
                </div>
                <div className='entry-content'>
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
                {/* <div className='entry-footer'>
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
                      <i class='far fa-envelope'></i>
                    </a>
                    <a
                      href='http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer'
                      target='_blank'
                    >
                      <i class='fab fa-facebook-f'></i>
                    </a>
                    <a
                      href='https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg'
                      target='_blank'
                    >
                      <i class='fab fa-pinterest'></i>
                    </a>
                    <a href='https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'>
                      <i class='fab fa-twitter'></i>
                    </a>
                  </div>
                </div> */}
              </div>
              <div className='row'>
                {data &&
                  data.map((item, index) => {
                    return (
                      <div className='col-md-6 col-12'>
                        <div className='small'>
                          <div className='entry-thumbnail'>
                            <a href='https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'>
                              <img className='w-100' src={require('../static/images/blush_flowers_b.jpg')} />
                            </a>
                          </div>
                          <div className='entry-body'>
                            <div className='entry-header'>
                              <div className='entry-meta'>
                                <a href='https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/'>
                                  LIFESTYLE
                                </a>
                                ,<a href='https://demo.myboutiquethemes.com/blush-classic/category/travel/'> TRAVEL</a>
                              </div>
                              <h2 className='entry-title'>
                                <a href='https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'>
                                  {item.title}
                                </a>
                              </h2>
                            </div>
                            <div className='entry-content'>
                              <p>{item.description}</p>
                              <a
                                className='readmore'
                                href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'
                              >
                                <button className='btn read-more'>Read more</button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
              <div className='row justify-content-center'>
                {isLoad ? (
                  <div class='spinner-border text-primary' role='status'>
                    <span class='sr-only'>Loading...</span>
                  </div>
                ) : (
                  <div className='readmore'>
                    <button className='btn read-more' onClick={() => loadMore()}>
                      read more
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <Aside categories={props.categories} compositions={props.compositions} />
          </div>
        </div>
      </div>
      <div className='after-content-home'>
        <h2 class='widgettitle'>Follow my Youtube Journey</h2>
        <div className='youtube-gallery'>
          <div className='row'>
            <div className='col-md-4'>
              <div class='youtube-video'>
                <a
                  href='https://www.youtube.com/watch?v=5S4y_GpaU-c'
                  title='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                  target='_blank'
                  rel='nofollow'
                >
                  <div class='youtube-thumb'>
                    <img
                      className='w-100'
                      src={require('../static/images/yt1.jpg')}
                      alt='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                    />
                    <img className='icon' src={require('../static/images/ic_play_red.png')} />
                  </div>
                  <h3 class='video-title'>CHANGE YOUR APPEARANCE with LOA &amp; Self-Love</h3>
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='youtube-video'>
                <a
                  href='https://www.youtube.com/watch?v=-I9S1F_zTCM'
                  title='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                  target='_blank'
                  rel='nofollow'
                >
                  <div class='youtube-thumb'>
                    <img
                      className='w-100'
                      src={require('../static/images/yt2.jpg')}
                      alt='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                    />
                    <img className='icon' src={require('../static/images/ic_play_red.png')} />
                  </div>
                  <h3 class='video-title'>I May Never Get Married... | EGO vs SOUL Journey</h3>
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='youtube-video'>
                <a
                  href='https://www.youtube.com/watch?v=PkzAJ4oKqQU'
                  title='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                  target='_blank'
                  rel='nofollow'
                >
                  <div class='youtube-thumb'>
                    <img
                      className='w-100'
                      src={require('../static/images/yt3.jpg')}
                      alt='CHANGE YOUR APPEARANCE with LOA &amp; Self-Love'
                    />
                    <img className='icon' src={require('../static/images/ic_play_red.png')} />
                  </div>
                  <h3 class='video-title'>VIPASSANA: One Year Later...</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  let posts = []
  let categories = []
  let compositions = []
  // Axios.get(config.host.base + config.path.base.categories).then((res) => {
  //   categories = res.data
  // })
  // Axios.get(config.host.base + config.path.base.compositions).then((res) => {
  //   compositions = res.data
  // })
  // Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit)
  //   .then((res) => {
  //     posts = res.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit).catch((e) => {
    console.log('Error: ', e.code)
  })

  let resCate = await Axios.get(config.host.base + config.path.base.categories).catch((e) => {
    console.log('Error: ', e.code)
  })
  let resCompos = await Axios.get(config.host.base + config.path.base.compositions).catch((e) =>
    console.log('Error: ', e.code)
  )

  posts = resPost && resPost.data != undefined ? resPost.data : []
  categories = resCate && resCate.data != undefined ? resCate.data : []
  compositions = (resCompos && resCompos.data) || []

  return { posts: posts, categories: categories, compositions: compositions }
}
export default Home
