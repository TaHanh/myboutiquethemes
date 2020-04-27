import { useRouter } from 'next/router'
import Swiper from './swiper'
export default function Aside(props) {
  const params = {
    slidesPerView: 'auto',
    //  spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
       1024: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 3,
        },
        650: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        350: {
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
   return (
      <div className="widget-area">
      <div className="about-widget">
        <div className="about-image" style={{ backgroundImage: "url(" + `${require("../static/images/kipa_chan.jpg")}` + ")", }}>
          {/* <img src={require("../static/images/kipa_chan.jpg")} /> */}
        </div>
        <div className="about-content">
          <img className="widget-title" src={require('../static/images/welcome.png')} />
          {/* <h2>Welcome</h2> */}
          <p className="about-text">I'm Vivian, the blogger on The Blush Co. I write about interior design, my obsession with the latest beauty products and my love for fashion and style. Follow my journey!</p>
          <a href="#" className="btn-more">
            More about me
        </a>
        </div>
      </div>
      <div className="social-media-widget">
        <h2 className="widget-title">Let’s get social</h2>
        <div className="social-media-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fas fa-heart"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div className="widget_text">
        <div className="widget-title">
          Currently Craving
          <div className="shop-the-post-container">
                      <p></p>
                      <Swiper params={params} />
                    </div>
      </div>
      </div>
      <div className="category">
        <h2 className="widget-title">What you can find here</h2>
        <ul>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Beauty</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Fashion</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Lifestyle</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Outfits</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Personal</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Travel</a>
          </li>
        </ul>
      </div>
      <div className="featured-post-widget">
        <h2 className="widget-title">
          Favorite Article
      </h2>
        <div className="featured-post">
          <div className="entry-thumbnail">
            <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
              <img src={require('../static/images/the_tonik.jpg')} />
            </a>
          </div>
          <div className="entry-header">
            <div className="entry-title">
              <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                What I learnt from Blogging in the last 5 Years
                </a>
            </div>
            <div className="posted-on">
              <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                <time>4. Mai 2019</time>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="nav-menu">
        <h2 className="widget-title">Favorite Shops</h2>
        <ul>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Asos</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">H&M</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">& Other Stories</a>
          </li>
          <li className="cat-item">
            <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Zara</a>
          </li>
        </ul>
      </div>
    </div>
   )
 }
 