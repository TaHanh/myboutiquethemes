import { useRouter } from 'next/router'
import Router from 'next/router'
import Link from 'next/link'
import config from '../config'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'

function Header(props) {
  if (props.store.user && props.store.user.token) {
  } else {
    props.store.getUser()
  }
  useEffect(() => {}, [])

  return (
    <header className='fixed-top'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-txt'>MENU</span>
        </button>

        <div className='row mx-0 align-items-center'>
          {props.store.user && props.store.user.token ? (
            <div className='dropdown btn-login d-lg-none'>
              <img
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                src={props.store.user.user.picture}
                alt='avatar'
                className='rounded-circle avatar cursor-pointer'
              />

              <div className='dropdown-menu py-0' aria-labelledby='dropdownMenuButton'>
                <div
                  className='dropdown-item text-center cursor-pointer py-2'
                  onClick={() => props.callBack('LOGOUT', '')}
                >
                  Đăng xuất
                </div>
              </div>
            </div>
          ) : null}
          <div className='search-icon d-lg-none cursor-pointer' onClick={() => props.callBack('CHECK_SEARCH', '')}>
            <i className='fas fa-search'></i>
          </div>
        </div>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Trang chủ</a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link d-lg-block d-none'>
                Fashion <i className='fas fa-angle-down'></i>
              </a>
              <a className='nav-link d-block d-lg-none' data-toggle='collapse' href='#collapseOne'>
                Fashion <i className='fas fa-angle-down'></i>
              </a>
              <ul className='sub-menu collapse' id='collapseOne'>
                <li className='menu-item'>
                  <a href=''>Outfits</a>
                </li>
              </ul>
            </li>{' '}
            {props.store.user && props.store.user.token ? (
              <li className='nav-item'>
                <Link href={config.client.adminPost}>
                  <a className='nav-link'>Bài viết</a>
                </Link>
              </li>
            ) : null}
            {props.store.user && props.store.user.token ? (
              <li className='nav-item'>
                <Link href={config.client.adminComposition}>
                  <a className='nav-link'>Thành phần</a>
                </Link>
              </li>
            ) : null}
            {props.store.user && props.store.user.token ? (
              <li className='nav-item'>
                <Link href={config.client.adminCategories}>
                  <a className='nav-link'>Danh mục</a>
                </Link>
              </li>
            ) : null}
            <li className='nav-item'>
              <a className='nav-link d-lg-block d-none'>
                Page Templates <i className='fas fa-angle-down'></i>{' '}
                {/* <img src={require('../static/images/down_arrow.png')} style={{ width: '35px' }} /> */}
              </a>
              <a
                className='nav-link d-block d-lg-none'
                data-toggle='collapse'
                href='#collapseTwo'
                aria-expanded='false'
              >
                Page Templates <i className='fas fa-angle-down'></i>
              </a>
              <ul className='sub-menu collapse' id='collapseTwo'>
                <li className='menu-item'>
                  <a href=''>Boutique</a>
                </li>
                <li className='menu-item'>
                  <a href=''>Instagram Page</a>
                </li>
                <li className='menu-item'>
                  <a href=''>Landing Page</a>
                </li>
              </ul>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0 justify-content-center'>
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

            {props.store.user && props.store.user.token ? (
              <div className='dropdown btn-login'>
                <img
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  src={props.store.user.user.picture}
                  alt='avatar'
                  className='rounded-circle avatar d-lg-block d-none cursor-pointer'
                />

                <div className='dropdown-menu py-0' aria-labelledby='dropdownMenuButton'>
                  <div
                    className='dropdown-item text-center cursor-pointer py-2'
                    onClick={() => props.callBack('LOGOUT', '')}
                  >
                    Đăng xuất
                  </div>
                </div>
              </div>
            ) : null}

            <div
              className='search-icon d-lg-block d-none cursor-pointer'
              onClick={() => props.callBack('CHECK_SEARCH', '')}
            >
              <i className='fas fa-search'></i>
            </div>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default inject('store')(observer(Header))
