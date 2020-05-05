import { useState, useEffect } from 'react'

// import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function EditorTxt(props) {
  const [editorState, setEditorState] = useState('')
  const [check, setCheck] = useState(false)
  const onChange = (editorState) => {
    setEditorState(editorState)
  }
  const setEditor = (editor) => {
    setEdito(editor)
  }
  useEffect(() => {
    setCheck(true)
  }, [])
  return (
    <div>
      {/* {check ? (
        <Editor
          editorState={editorState}
          toolbarClassName='toolbarClassName'
          wrapperClassName='wrapperClassName'
          editorClassName='editorClassName'
          onEditorStateChange={onChange}
        />
      ) : null} */}
    </div>
  )
}
