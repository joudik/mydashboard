import React from 'react'
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'

import { Header } from '../Components'
import { EditorData } from '../data (1)/data/dummy'
const Editor = () => {
  return (
    <div className="m-2 md:10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Link, Image, QuickToolbar, Toolbar]} />
        <EditorData />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
