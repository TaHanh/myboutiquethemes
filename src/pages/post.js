import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import '../static/styles/post.scss'
function Create(props) {
  return (
    <Layout title={'Blush'}>
      <WysiwygEditor />
    </Layout>
  )
}
export default Create
