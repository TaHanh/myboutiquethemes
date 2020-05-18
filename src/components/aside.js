import { useRouter } from 'next/router'
import Swiper from './swiper'
import config from '../config'
import Axios from 'axios'
function Aside(props) {
  return (
    <div className='widget-area'>
      <div className='about-widget'>
        <div
          className='about-image'
          style={{ backgroundImage: 'url(' + `${require('../static/images/kipa_chan.jpg')}` + ')' }}
        >
          {/* <img src={require("../static/images/kipa_chan.jpg")} /> */}
        </div>
        <div className='about-content'>
          <img className='widget-title' src={require('../static/images/welcome.png')} />
          {/* <h2>Welcome</h2> */}
          <p className='about-text'>
            I'm Vivian, the blogger on The Blush Co. I write about interior design, my obsession with the latest beauty
            products and my love for fashion and style. Follow my journey!
          </p>
          <a href='#' className='btn-more'>
            More about me
          </a>
        </div>
      </div>
      <div className='social-media-widget'>
        <h2 className='widget-title'>Let’s get social</h2>
        <div className='social-media-icons'>
          <a href='#'>
            <i class='fab fa-facebook-f'></i>
          </a>
          <a href='#'>
            <i class='fab fa-instagram'></i>
          </a>

          <a href='#'>
            <i class='fas fa-heart'></i>
          </a>
          {/* <a href='#'>
            <i class='fab fa-facebook-f'></i>
          </a> */}
        </div>
      </div>
      {props.compositions && props.compositions.length > 0 ? (
        <div className='category'>
          <h2 className='widget-title'>What you can find here</h2>
          <ul>
            {props.compositions &&
              props.compositions.map((item, index) => {
                return (
                  <li className='cat-item'>
                    <a href=''>{item.name}</a>
                  </li>
                )
              })}
          </ul>
        </div>
      ) : null}
      <div className='featured-post-widget'>
        <h2 className='widget-title'>Favorite Article</h2>
        <div className='featured-post'>
          <div className='entry-thumbnail'>
            <a href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'>
              <img src={require('../static/images/the_tonik.jpg')} />
            </a>
          </div>
          <div className='entry-header'>
            <div className='entry-title'>
              <a href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'>
                What I learnt from Blogging in the last 5 Years
              </a>
            </div>
            <div className='posted-on'>
              <a href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'>
                <time>4. Mai 2019</time>
              </a>
            </div>
          </div>
        </div>
      </div>
      {props.categories && props.categories.length > 0 ? (
        <div className='nav-menu'>
          <h2 className='widget-title'>Favorite Shops</h2>
          <ul>
            {props.categories &&
              props.categories.map((item, index) => {
                return (
                  <li className='cat-item'>
                    <a href='/'>{item.name}</a>
                  </li>
                )
              })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
Aside.getInitialProps = async function () {
  let categories = []
  // console.log('res.data')
  // Axios.get('http://1.2.3.127:9000/categories')
  //   .then((res) => {
  //     console.log(res.data)
  //     categories = res.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  return { categories: categories }
}

export default Aside
