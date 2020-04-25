
import Link from 'next/link'
import Head from 'next/head'
import '../static/styles/style.scss'
import Footer from './footer'
import Header from './header'

export default ({ children, title = 'title' }) => {
  return (
    <div className="container-layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <div style={{height: '50px'}}></div>
      <main>
        {children}
      </main>
     <Footer />
    </div>

  );
}