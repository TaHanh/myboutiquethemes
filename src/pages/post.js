import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import '../static/styles/post.scss'
import { useState } from 'react'
function Create(props) {
  const [imgSrc,setImg]= useState("")
  const [file,setFile]= useState([])

  const change = (file) => {

    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
   console.log(url) // Would see a path?
     reader.onloadend = function (e) {
       console.log(reader.result)
        setImg(reader.result)
      }.bind(this);
   
    // TODO: concat files
  }
  return (
    <Layout title={'Blush'}>
       <form>
      <input 
      
        type="file" 
  
   
        onChange={e => change(e.target.files[0])}/>
     </form>
    {/* Only show first image, for now. */}
    {imgSrc ? <img src={imgSrc} /> : null}
      <WysiwygEditor />
    </Layout>
  )
}
export default Create
