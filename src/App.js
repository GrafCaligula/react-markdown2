import { useState } from "react";
import { marked } from "marked";
import data from "./data"

export default function App() {
  const [text, setText] = useState(data);

  function handleChange(event) {
    setText(event.target.value);
  }

  const markdown = marked(text);

  return (
    <div>
      <h1 className="text-center m-4 p-2">Markdown Previewer</h1>
      <div className="row">
        <div className="col-6">
          <h5>Enter Markdown here:</h5>
          <textarea
            className="form-control"
            id="editor"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <h5>See the result:</h5>
          <div id="preview" className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} />
        </div>
      </div>
    </div>
  );
}
