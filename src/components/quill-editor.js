import { useState, useEffect, useRef, Component } from 'react'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>fgdshf</p>,
})

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: ['small', false, 'large'] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],

    // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ align: [] }],

    // ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

class QuillEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { value: null } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.editor = React.createRef()
  }

  handleChange = (content, delta, source, editor) => {
    this.setState({ value: editor.getHTML() })
  }

  render() {
    return (
      <div>
        <QuillNoSSRWrapper
          ref={this.editor}
          onChange={this.handleChange}
          modules={modules}
          formats={formats}
          theme='snow'
        />
      </div>
    )
  }
}
export default QuillEditor

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
