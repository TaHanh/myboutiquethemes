
import Link from 'next/link'
import Head from 'next/head'
import '../../assets/styles/style.scss'

export default ({ children, title = 'This is the default title' }) => {
  const posts = [{
    title: 'title',
    slug: 'about'
  },{
    title: 'title',
    slug: 'about'
  },{
    title: 'title',
    slug: 'about'
  }]
  return (
   <div className="container-layout">
    <Head>
      <title>{title}</title>
     
    </Head>
    <header>
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    </header>
    <main>
    {children}
    </main>
    <footer>
      <div className="abc">
      {'I`m here to stay'}
        <div className="xyz">
        {'I`m here to stay'}
        </div>
      </div>
      </footer>
  </div>

 );
}