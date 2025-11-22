import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import ToggleBar from './components/ToggleBar'
import { singleIcon, bothIcon } from './components/icons.jsx';

const defaultEditorText = ` # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 `;

function App() {
  const [editorText, setEditorText] = useState(defaultEditorText);
  const [show, setShow] = useState('both');

  const handleEditorChange = (e) => setEditorText(e.target.value);

  return (
    <>
      {(show === 'editor' || show === 'both') && (
        <div>
          <h1 id="editor-title">Editor</h1>
          <ToggleBar
            onClick={() => setShow(show === 'editor' ? 'both' : 'editor')}
            icon={show === 'editor' ? bothIcon : singleIcon}
          />
          <Editor editorText={editorText} onChange={handleEditorChange} />
        </div>
      )}
      {(show === 'previewer' || show === 'both') && (
        <div>
          <h1 id="previewer-title">Previewer</h1>
          <ToggleBar
            onClick={() => setShow(show === 'previewer' ? 'both' : 'previewer')}
            icon={show === 'previewer' ? bothIcon : singleIcon}
          />
          <Previewer previewerText={editorText} />
        </div>
      )}
    </>
  );
}

export default App;
