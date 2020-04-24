import Head from 'next/head'
import Layout from '../../components/common/layout'
import HomeView from '../../components/views/home'
import { Router } from '../../routes'
import { useRouter } from 'next/router'
export default function Home(props) {
  console.log(Router.router)
 
  const router = useRouter()

   console.log(router)
  return (
  <HomeView title={'post about'} />
  )
}
