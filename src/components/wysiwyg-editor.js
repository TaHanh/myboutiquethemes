import { useState, useEffect, useRef, Component } from 'react'
// import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { EditorState } from 'draft-js'

const WysiwygNoSSRWrapper = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  loading: () => null,
  ssr: false,
})

class WysiwygEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  setEditor = (editor) => {
    this.editor = editor
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <WysiwygNoSSRWrapper
        ref={this.setEditor}
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
export default WysiwygEditor

// function EditorTxt(props) {
//   const [editorState, setEditorState] = useState('')
//   const [check, setCheck] = useState(false)
//   const editorRef = useRef()
//   const [editorLoaded, setEditorLoaded] = useState(false)
//   const [value, setValue] = useState('')
//   const onChange = (editorState) => {
//     setEditorState(editorState)
//   }
//   const { Editor } = editorRef.current || {}
//   const [Editor1, setEditor1] = useState('')
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       this.ReactQuill = require('react-quill')
//     }
//     if (document) {
//       setEditor1(require('react-draft-wysiwyg'))
//       if (process.browser) {
//         setEditorLoaded(true)
//       }
//     }
//     editorRef.current = {
//       Editor: require('react-draft-wysiwyg'),
//     }
//   }, [])
//   const ReactQuill = this.ReactQuill
//   if (typeof window !== 'undefined' && ReactQuill) {
//     return <ReactQuill onChange={setValue} theme='bubble' value={value} />
//   } else {
//     return <textarea />
//   }
//   return (
//     <div>
//       {editorLoaded ? (
//         <Editor1
//           editorState={editorState}
//           toolbarClassName='toolbarClassName'
//           wrapperClassName='wrapperClassName'
//           editorClassName='editorClassName'
//           onEditorStateChange={onChange}
//         />
//       ) : null}
//       {/* <ReactQuill theme='snow' value={value} onChange={setValue} /> */}
//     </div>
//   )
// }

// export default EditorTxt
