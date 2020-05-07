import { useState, useEffect, useRef, Component } from 'react'
// import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'

const WysiwygNoSSRWrapper = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  loading: () => null,
  ssr: false,
})
// const htmlToDraft = dynamic(() => import('html-to-draftjs'), {
//   ssr: false,
// })
const htmlToDraft = dynamic(import('html-to-draftjs'), {
  ssr: false,
})

class WysiwygEditor extends Component {
  toolbar = {
    options: [
      'inline',
      'blockType',
      'fontSize',
      'list',
      'textAlign',
      'link',
      'embedded',
      'emoji',
      'image',
      'remove',
      'history',
    ],
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    },
    blockType: {
      inDropdown: true,
      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    fontSize: {
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },

    list: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['unordered', 'ordered', 'indent', 'outdent'],
    },
    textAlign: {
      inDropdown: true,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['left', 'center', 'right', 'justify'],
    },
    link: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      dropdownClassName: undefined,
      showOpenOptionOnHover: true,
      defaultTargetOption: '_self',
      options: ['link', 'unlink'],

      linkCallback: undefined,
    },
    emoji: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      emojis: [
        '😀',
        '😁',
        '😂',
        '😃',
        '😉',
        '😋',
        '😎',
        '😍',
        '😗',
        '🤗',
        '🤔',
        '😣',
        '😫',
        '😴',
        '😌',
        '🤓',
        '😛',
        '😜',
        '😠',
        '😇',
        '😷',
        '😈',
        '👻',
        '😺',
        '😸',
        '😹',
        '😻',
        '😼',
        '😽',
        '🙀',
        '🙈',
        '🙉',
        '🙊',
        '👼',
        '👮',
        '🕵',
        '💂',
        '👳',
        '🎅',
        '👸',
        '👰',
        '👲',
        '🙍',
        '🙇',
        '🚶',
        '🏃',
        '💃',
        '⛷',
        '🏂',
        '🏌',
        '🏄',
        '🚣',
        '🏊',
        '⛹',
        '🏋',
        '🚴',
        '👫',
        '💪',
        '👈',
        '👉',
        '👉',
        '👆',
        '🖕',
        '👇',
        '🖖',
        '🤘',
        '🖐',
        '👌',
        '👍',
        '👎',
        '✊',
        '👊',
        '👏',
        '🙌',
        '🙏',
        '🐵',
        '🐶',
        '🐇',
        '🐥',
        '🐸',
        '🐌',
        '🐛',
        '🐜',
        '🐝',
        '🍉',
        '🍄',
        '🍔',
        '🍤',
        '🍨',
        '🍪',
        '🎂',
        '🍰',
        '🍾',
        '🍷',
        '🍸',
        '🍺',
        '🌍',
        '🚑',
        '⏰',
        '🌙',
        '🌝',
        '🌞',
        '⭐',
        '🌟',
        '🌠',
        '🌨',
        '🌩',
        '⛄',
        '🔥',
        '🎄',
        '🎈',
        '🎉',
        '🎊',
        '🎁',
        '🎗',
        '🏀',
        '🏈',
        '🎲',
        '🔇',
        '🔈',
        '📣',
        '🔔',
        '🎵',
        '🎷',
        '💰',
        '🖊',
        '📅',
        '✅',
        '❎',
        '💯',
      ],
    },
    embedded: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      embedCallback: undefined,
      defaultSize: {
        height: 'auto',
        width: 'auto',
      },
    },
    image: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      previewImage: false,
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      uploadCallback: this.uploadCallback,
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: 'auto',
        width: 'auto',
      },
    },
    remove: { className: undefined, component: undefined },
    history: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['undo', 'redo'],
    },
  }
  constructor(props) {
    super(props)
    const html = ''
    // const contentBlock = htmlToDraft(html)
    // if (contentBlock) {
    // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
    // const editorState = EditorState.createWithContent(contentState)
    // this.state = {
    //   editorState,
    // }
    // } else {
    this.state = { editorState: EditorState.createEmpty() }
    // }
  }
  setEditor = (editor) => {
    this.editor = editor
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  uploadCallback(file) {
    console.log(file)
    return new Promise((resolve, reject) => {
      resolve({ data: { link: 'http://dummy_image_src.com' } })
    })
  }
  render() {
    const { editorState } = this.state
    return (
      <div>
        {' '}
        <WysiwygNoSSRWrapper
          ref={this.setEditor}
          editorState={editorState}
          wrapperClassName='wysiwyg-wrapper'
          editorClassName='wysiwyg-editor'
          onEditorStateChange={this.onEditorStateChange}
          toolbar={this.toolbar}
          // toolbar={{
          //   image: {
          //     uploadCallback: this.uploadCallback,
          //     // previewImage: true,
          //     // alt: { present: true, mandatory: false },
          //     inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
          //   },
          // }}
        />
        {/* <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */}
      </div>
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
