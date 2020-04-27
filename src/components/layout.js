
import Link from 'next/link'
import Head from 'next/head'
import '../static/styles/style.scss'
import Footer from './footer'
import Header from './header'
import Aside from './aside'
import Search from './search'
export default ({ children, title = 'title', callBack, isSearch }) => {

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
            <a>
              <img src={require('../static/images/blush_title.png')} />
            </a>
          </div>
          {children}

        </div>
      </main>
      <Footer />

      {isSearch ? <Search callBack={callBack} /> : null}
    </div>

  );
}