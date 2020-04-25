import Head from 'next/head'
import Layout from '../components/layout'
import HomeView from '../components/home'
function Home(props) {
  console.log(props)

  return (
  <HomeView title="home nhes"/>
  )
}


// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log("fdjsfk1245")
  const post = {}

  // Pass post data to the page via props
  return { props: { post } }
}

export default Home
