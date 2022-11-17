import { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./data";

export default function App() {
  const [text, setText] = useState("# Title");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="app">
      <textarea id="editor" onChange={handleChange}></textarea>
      <div id="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
