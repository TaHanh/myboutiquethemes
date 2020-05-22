import config from '../config'
import Axios from 'axios'
import Link from 'next/link'
import { convertTitle } from '../utils/convert'
import { inject, observer } from 'mobx-react'

function Aside(props) {
  return (
    <div className='widget-area'>
      <div className='about-widget'>
        <div style={{ maxWidth: 300, margin: 'auto' }}>
          <div
            className='about-image'
            style={{
              backgroundImage: 'url(' + `${require('../static/images/Glowish_logo.png')}` + ')',
            }}
          ></div>
        </div>
        <div className='about-content'>
          <img className='widget-title' src={require('../static/images/welcome.png')} />
          <p className='about-text'>
            Glowish là nền tảng chăm sóc da online, dành cho những bạn chưa có thời gian, điều kiện đi khám trực tiếp
            tại các phòng khám da liễu, có nhu cầu tìm kiếm các sản phẩm dưỡng da bên ngoài để chăm sóc da.
          </p>
          {/* <a href='' className='btn-more'>
            More about me
          </a> */}
        </div>
      </div>
      <div className='social-media-widget'>
        <h2 className='widget-title'>Let’s get social</h2>
        <div className='social-media-icons'>
          <a href='https://www.facebook.com/glowish.net/' target='_blank'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.instagram.com/glowishofficial/' target='_blank'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.youtube.com/channel/UC8GpXX1RdB7SBLuGoOa61rg' target='_blank'>
            <i class='fab fa-youtube'></i>
          </a>
        </div>
      </div>
      {props.compositions && props.compositions.length > 0 ? (
        <div className='category'>
          <h2 className='widget-title'>COMPOSITIONS</h2>
          <ul>
            {props.compositions &&
              props.compositions.map((item, index) => {
                return (
                  <Link href={config.client.compositions + convertTitle(item.name) + '?id=' + item.id}>
                    <li className='cat-item cursor-pointer' key={index}>
                      <a>{item.name}</a>
                    </li>
                  </Link>
                )
              })}
          </ul>
        </div>
      ) : null}
      {/* <div className='featured-post-widget'>
        <h2 className='widget-title'>RECENT POSTS</h2>
        <div className='featured-post'>
          <div className='entry-thumbnail'>
            <a href=''>
              <img src={require('../static/images/the_tonik.jpg')} />
            </a>
          </div>
          <div className='entry-header'>
            <div className='entry-title'>
              <a href=''>What I learnt from Blogging in the last 5 Years</a>
            </div>
            <div className='posted-on'>
              <a href=''>
                <time>4. Mai 2019</time>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {props.categories && props.categories.length > 0 ? (
        <div className='nav-menu'>
          <h2 className='widget-title'>CATEGORIES</h2>
          <ul>
            {props.categories &&
              props.categories.map((item, index) => {
                return (
                  <Link href={config.client.categories + convertTitle(item.name) + '?id=' + item.id}>
                    <li className='cat-item cursor-pointer' key={index}>
                      <a>{item.name}</a>
                    </li>
                  </Link>
                )
              })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default inject('store')(observer(Aside))
