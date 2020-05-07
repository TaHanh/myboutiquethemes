import WysiwygEditor from '../components/wysiwyg-editor'
import Layout from '../components/layout'
import '../static/styles/create.scss'
function Create(props) {
  return (
    <Layout title={'Blush'}>
      {/* <QuillEditor /> */}
      <WysiwygEditor />
    </Layout>
  )
}
export default Create
