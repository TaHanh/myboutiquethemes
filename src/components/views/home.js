import Layout from "../common/layout";
import { useRouter } from 'next/router'
import Router from 'next/router'
export default function Home(props) {
   const router = useRouter()
   const handleClick = e => {
      e.preventDefault()
      router.push('/about/[title]')
      // Router.push({
      //    pathname: '/about',
      //    query: { name: 'Zeit' },
      //  })
    }
   return (
     <div>
       <Layout title="Contact us">

     <div onClick={handleClick} >{props.title}</div>
   </Layout>
      </div>
   )
 }
 