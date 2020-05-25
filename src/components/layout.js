import Link from 'next/link'
import Head from 'next/head'
import '../static/styles/style.scss'
import '../static/styles/post.scss'
import '../static/styles/react-draft-wysiwyg.scss'
import Footer from './footer'
import Header from './header'
import Aside from './aside'
import Search from './search'
import loadingProgress from '../utils/loading-progress'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Router from 'next/router'
import config from '../config'
import { convertTitle } from '../utils/convert'
import Cookies from 'universal-cookie'

loadingProgress()
export default ({ children, title = 'Glowish' }) => {
  const [isSearch, changeSearch] = useState(false)
  const cookies = new Cookies()
  useEffect(() => {}, [])

  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'CHECK_SEARCH':
        changeSearch(!isSearch)
        break
      case 'SEARCH':
        changeSearch(false)
        Router.push(config.client.search + convertTitle(value))
        break
      case 'LOGOUT':
        cookies.remove('user', { path: '/' })
        console.log('user Store', cookies.get('user'))
        break
      default:
        break
    }
  }
  return (
    <div className='container-layout'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header callBack={callBack} />
      <div style={{ height: '60px' }}></div>
      <main>
        <div className='content-area'>{children}</div>
      </main>
      <Footer />
      <ToastContainer />
      {isSearch ? <Search callBack={callBack} /> : null}
    </div>
  )
}
