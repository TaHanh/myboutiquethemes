
import Link from 'next/link'
import Head from 'next/head'
import '../static/styles/style.scss'
import Footer from './footer'
import Header from './header'
import Aside from './aside'
import Search from './search'
import { useEffect } from 'react'
import Router  from 'next/router'
import loadingProgress from '../utils/loading-progress'
 loadingProgress();
export default ({ children, title = 'title', callBack, isSearch }) => {
    useEffect(()=>{
     
    }, [])
  return (
    <div className="container-layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Header callBack={callBack}/>
      <div style={{ height: '50px' }}></div>
      <main>
        <div className="content-area">
          <div className="site-branding">
          <Link href="/blush-classic">
              <img src={require('../static/images/blush_title.png')} />
          </Link>
          </div>
          {children}

        </div>
      </main>
      <Footer />

      {isSearch ? <Search callBack={callBack} /> : null}
    </div>

  );
}