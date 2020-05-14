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

loadingProgress()
export default ({ children, title = 'title' }) => {
  const [isSearch, changeSearch] = useState(false)
  useEffect(() => {}, [])

  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'CHECK_SEARCH':
        changeSearch(!isSearch)
        break
      case 'SEARCH':
        changeSearch(false)
        alert(value)
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
      <div style={{ height: '50px' }}></div>
      <main>
        <div className='content-area'>{children}</div>
      </main>
      <Footer />

      {isSearch ? <Search callBack={callBack} /> : null}
    </div>
  )
}
