import { useRouter } from 'next/router'
import Swiper from './swiper'
import config from '../config'
import Axios from 'axios'
import { connect } from 'react-redux'
import state from '../store/redux'
import { Component } from 'react'
class Aside extends Component {
  render() {
    return (
      <div className='widget-area'>
        <div className='about-widget'>
          <div
            className='about-image'
            style={{
              backgroundImage: 'url(' + `${require('../static/images/Glowish_logo.png')}` + ')',
            }}
          ></div>
          <div className='about-content'>
            <img className='widget-title' src={require('../static/images/welcome.png')} />
            {/* <h2>Welcome</h2> */}
            <p className='about-text'>
              I'm Vivian, the blogger on The Blush Co. I write about interior design, my obsession with the latest
              beauty products and my love for fashion and style. Follow my journey!
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
          </div>
        </div>
        {this.props.compositions && this.props.compositions.length > 0 ? (
          <div className='category'>
            <h2 className='widget-title'>Thành phần</h2>
            <ul>
              {this.props.compositions &&
                this.props.compositions.map((item, index) => {
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
        {this.props.categories && this.props.categories.length > 0 ? (
          <div className='nav-menu'>
            <h2 className='widget-title'>Danh mục</h2>
            <ul>
              {this.props.categories &&
                this.props.categories.map((item, index) => {
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
}
// Aside.getInitialProps() {
//   // let categories = [];
//   // console.log('res.data')
//   // Axios.get('http://1.2.3.127:9000/categories')
//   //   .then((res) => {
//   //     console.log(res.data)
//   //     categories = res.data
//   //   })
//   //   .catch((err) => {
//   //     console.log(err)
//   //   })
//   console.log("dtat", state);

//   return state;
// };

export default Aside
