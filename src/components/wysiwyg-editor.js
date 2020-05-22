import { useState, useEffect, useRef, Component } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import Axios from 'axios'
import config from '../config'
import { uploadCallback } from '../utils/upload'

const WysiwygNoSSRWrapper = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  loading: () => null,
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
      defaultTargetOption: '_blank',
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
      previewImage: true,
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      uploadCallback: this.upload,
      alt: { present: true },
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
    console.log('props', this.props)
    this.state = { editorState: EditorState.createEmpty() }
    // console.log(this.props.content)
  }

  componentDidMount() {
    let value = this.props.content
    // console.log("value", this.props.content);
    if (value && value != '') {
      const blocksFromHTML = convertFromHTML(value)
      // console.log(draftToHtml(convertToRaw(value)))
      // let contentState = ContentState.createFromBlockArray(
      //   blockHTML.contentBlocks,
      //   blockHTML.entityMap
      // );

      //
      let contentState = ContentState.createFromBlockArray(blocksFromHTML)
      contentState = this.customContentState(contentState)
      const editorState = EditorState.createWithContent(contentState)
      this.setState({
        editorState: editorState,
      })
    }
  }
  setEditor = (editor) => {
    this.editor = editor
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
    this.props.callBack('EDITOR', draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }
  upload(file) {
    return new Promise((resolve, reject) => {
      let formData = new FormData()
      formData.append('image', file)
      Axios.post(config.host.upload + config.path.upload.upFile + '?token=' + config.host.token, formData, {
        'Content-Type': 'multipart/form-data',
      })
        .then((res) => {
          console.log(res)
          resolve({
            data: { link: config.host.upload + res.data.imageLink },
          })
        })
        .catch((err) => {
          console.log('error upload ', err)
        })
    })
  }
  customContentState(contentState) {
    const newBlockMap = contentState.getBlockMap().map((block) => {
      const entityKey = block.getEntityAt(0)
      if (entityKey !== null) {
        const entityBlock = contentState.getEntity(entityKey)
        const entityType = entityBlock.getType()
        switch (entityType) {
          case 'IMAGE': {
            const newBlock = block.merge({
              type: 'atomic',
              text: 'img',
            })
            return newBlock
          }
          default:
            return block
        }
      }
      return block
    })
    const newContentState = contentState.set('blockMap', newBlockMap)
    return newContentState
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
          blockRenderMap={this.blockRenderMap}
        />
      </div>
    )
  }
}
export default WysiwygEditor
