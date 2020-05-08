import { useState, useEffect, useRef, Component } from 'react'
// import { Editor } from 'react-draft-wysiwyg'
import '../static/styles/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import Axios from 'axios'
import config from '../config'
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
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'image', 'remove', 'history'],
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
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append('image', file)
      Axios.post(config.host.upload + config.path.upload.upFile, formData, {
        'Content-Type': 'multipart/form-data',
      })
        .then((res) => {
          resolve({ data: { link: config.host.upload + res.data } })
        })
        .catch((err) => {
          console.log('error upload ', err)
        })
    })
  }
  uploadAction() {
    var data = new FormData()
    var imagedata = document.querySelector('input[type="file"]').files[0]
    data.append('data', imagedata)
    console.log(imagedata)
    Axios.post('http://1.2.3.127:3000/api/post/create', data, {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      type: 'formData',
    })
      .then((res) => {
        console.log('res')
        console.log(res)
      })
      .catch((err) => {
        console.log('err')
        console.log(err)
      })
    // fetch("http://localhost:8910/taskCreationController/createStoryTask", {
    //   mode: 'no-cors',
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //     "Accept": "application/json",
    //     "type": "formData"
    //   },
    //   body: data
    // }).then(function (res) {
    //   if (res.ok) {
    //     alert("Perfect! ");
    //   } else if (res.status == 401) {
    //     alert("Oops! ");
    //   }
    // }, function (e) {
    //   alert("Error submitting form!");
    // });
  }

  render() {
    const { editorState } = this.state
    return (
      <div>
        <WysiwygNoSSRWrapper
          ref={this.setEditor}
          editorState={editorState}
          wrapperClassName='wysiwyg-wrapper'
          editorClassName='wysiwyg-editor'
          onEditorStateChange={this.onEditorStateChange}
          toolbar={this.toolbar}
        />
        {/* <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */}
        <form encType='multipart/form-data' action=''>
          <input
            type='file'
            name='image'
            onChange={(e) => {
              console.log(e.target.files[0])
            }}
          ></input>
          <input type='button' value='upload' onClick={this.uploadAction.bind(this)}></input>
        </form>
      </div>
    )
  }
}
export default WysiwygEditor
