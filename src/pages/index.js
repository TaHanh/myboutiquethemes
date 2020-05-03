import Head from 'next/head'
import Layout from '../components/layout'
import HomeView from '../components/home'
import '../static/styles/home.scss'
import Aside from '../components/aside'
import SwiperComponent from '../components/swiper'
import Swiper from 'react-id-swiper';
import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import handler from '../api/user'

function Home(props) {
  const [swiper1, updateSwiper1] = useState(null);
  const [swiper2, updateSwiper2] = useState(null);
  const [swiper3, updateSwiper3] = useState(null);
  const [isSearch, changeSearch] = useState(false);

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
      }
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
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
  }
  const imagesGhe = [
    {
      img: require("../static/images/ghe1.jpg"),

    },
    {
      img: require("../static/images/ghe2.jpg"),

    },
    {
      img: require("../static/images/ghe3.jpg"),

    },
    {
      img: require("../static/images/ghe4.jpg"),

    },
    {
      img: require("../static/images/ghe5.jpg"),

    },
    {
      img: require("../static/images/ghe6.jpg"),

    },
    {
      img: require("../static/images/ghe7.jpg"),

    },
  ]
  const imagesUser = [
    {
      img: require("../static/images/u1.jpg"),
      title: "Yoins",

    },
    {
      img: require("../static/images/u2.jpg"),
      title: "",
      name: "$16.00"
    },
    {
      img: require("../static/images/u3.jpg"),
      title: "FOREVER21",
      name: "$22.90"
    },
    {
      img: require("../static/images/u4.jpg"),
      title: "FOREVER21",
      name: "$37.90"
    }

  ];
  const images = [
    {
      img: require("../static/images/u1.jpg"),
    },
    {
      img: require("../static/images/u2.jpg"),
    },
    {
      img: require("../static/images/u3.jpg"),
    },
    {
      img: require("../static/images/u4.jpg"),
    }

  ];
  const stpSlide = (arr, params, updateSwiper, key) => {
    return (
      <div className="shop-container-swiper">
        <Swiper {...params} getSwiper={updateSwiper} >
          {arr.map((item, index) => {
            return (
              <div className="item-swiper">
                <a href="#">
                  <div
                    className="item-swiper-img"
                    style={{
                      backgroundImage: "url(" + `${item.img}` + ")",
                    }}>
                    <img style={{}} src={arr[1].img} />
                  </div>
                  <div className="item-swiper-title">
                    {item.title ? <span className="font-weight-bold pt-2">{item.title}</span> : null}
                    {item.name ? <span className="pt-1">{item.name}</span> : null}
                  </div>
                </a></div>
            )
          })}
        </Swiper>
        <button className="btn-prev" onClick={() => goPrev(key)}><i class="fas fa-chevron-left"></i></button>
        <button className="btn-next" onClick={() => goNext(key)}><i class="fas fa-chevron-right"></i></button>
      </div>
    );
  }
  const goNext = (key) => {
    switch (key) {
      case 1:
        if (swiper1 !== null) {
          swiper1.slideNext();
        }
        break;
      case 2:
        if (swiper2 !== null) {
          swiper2.slideNext();
        }
        break;
      case 3:
        if (swiper3 !== null) {
          swiper3.slideNext();
        }
        break;
      default:
        break;
    }

  };
  const goPrev = (key) => {
    switch (key) {
      case 1:
        if (swiper1 !== null) {
          swiper1.slidePrev();
        }
        break;
      case 2:
        if (swiper2 !== null) {
          swiper2.slidePrev();
        }
        break;
      case 3:
        if (swiper3 !== null) {
          swiper3.slidePrev();
        }
        break;
      default:
        break;
    }

  };
  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'CHECK_SEARCH':
        changeSearch(!isSearch);
        break;
      case 'SEARCH':
        changeSearch(false);
        alert(value)
      default:
        break;
    }
  }
  return (
    <Layout title={"Blush"} callBack={callBack} isSearch={isSearch}>
      <div className="site-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="site-main">
              <div className="entry-thumbnail">
                <img src={require('../static/images/the_tonik_b.jpg')} />
              </div>
              <div className="entry-body">
                <div className="entry-header">
                  <div className="entry-meta">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> TRAVEL</a>
                  </div>
                  <h1 className="entry-title">WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS</h1>
                </div>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                  <div className="shop-the-post">
                    <h3>Shop this Post</h3>
                    <div className="shop-the-post-container">
                      <p></p>
                      <SwiperComponent params={params} />
                    </div>
                  </div>
                  <a className="readmore"
                    href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                    <button className="btn read-more">
                      Read more
              </button>
                  </a>
                </div>
                <div className="entry-footer">
                  <a className="comments-link" href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/#respond">
                    Leave a Comment
            </a>
                  <div className="share">

                    <a href="mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/" target="_blank">
                      <i class="far fa-envelope"></i>
                    </a>
                    <a href="http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg" target="_blank">
                      <i class="fab fa-pinterest"></i>
                    </a>
                    <a href="https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/blush_flowers_b.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> TRAVEL</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">Beauty Favorites for Summer</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/the_tonik_women.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/personal/">  PERSONAL</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">HOW TO MOVE TO ANOTHER CITY AND FIND NEW FRIENDS</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/kipa_chan_b.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/fashion/">FASHION</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/outfits/"> OUTFITS</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">FASHION PIECES FOR THE NEW SEASON</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/alyssa_strohmann.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">MY FAVORITE BOOKS, WEBSITES AND PODCASTS FOR PERSONAL DEVELOPMENT</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <div className="shop-the-post">
                          <p></p>
                          <h3>Shop this Post</h3>
                          <div className="shop-container">
                            {stpSlide(imagesGhe, paramA, updateSwiper1, 1)}
                          </div>
                        </div>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/dex_ezekiel.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">HOW TO STYLE YOUR APARTMENT WITH FLOWERS</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <div className="shop-the-post">
                          <p></p>
                          <h3>Shop this Post</h3>
                          <div className="shop-container">
                            {stpSlide(imagesUser, paramA, updateSwiper2, 2)}
                          </div>
                        </div>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/the_tonik_nik.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">BEAUTY</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">THE NEW GUCCI BEAUTY COLLECTION</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                        <div className="shop-the-post">
                          <p></p>
                          <h3>Shop this Post</h3>
                          <div className="shop-container" style={{ maxWidth: '200px' }}>
                            {stpSlide(images, paramB, updateSwiper3, 3)}
                          </div>
                        </div>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-4"><Aside /></div>
        </div>
      </div>
      <div className="after-content-home">
        <h2 class="widgettitle">Follow my Youtube Journey</h2>
        <div className="youtube-gallery">
          <div className="row">
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=5S4y_GpaU-c" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt1.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">CHANGE YOUR APPEARANCE with LOA &amp; Self-Love</h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=-I9S1F_zTCM" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt2.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">I May Never Get Married... | EGO vs SOUL Journey</h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=PkzAJ4oKqQU" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt3.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">VIPASSANA: One Year Later...</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length} ${handler}`)

  return {
    shows: data
  }
}
export default Home
