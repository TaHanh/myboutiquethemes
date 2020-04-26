
import Link from 'next/link'
import Head from 'next/head'
import '../static/styles/style.scss'
import Footer from './footer'
import Header from './header'
import Aside from './aside'
export default ({ children, title = 'title' }) => {
  return (
    <div className="container-layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <div style={{height: '50px'}}></div>
      <main>
      <div className="content-area">
        <div className="site-branding">
          <a>
            <img src={require('../static/images/blush_title.png')} />
          </a>
        </div>
        {children}
        
      </div>
      </main>
     <Footer />
    </div>

  );
}