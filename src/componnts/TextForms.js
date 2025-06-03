import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };

  const handleOnChange = (event) => { 
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText('');
    props.showAlert("Text is cleared","success");
  };

  const handleFirstUp = () => {
    let newText = text.split(" ");
    let i=0;
    newText.forEach(element => {
        newText[i++] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    setText(newText.join(" "));
    props.showAlert("First letter of each word converted to upper case","success");
  }

  const handleCopyText = () => {
    // let text = document.getElementById("myBox");
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("The text is copied to clipboard","success");
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <h1 className="mb-4">{props.heading}</h1>
          <textarea
            className={`form-control`}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: props.mode === 'light' ? 'white' : '#4e538e'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstUp}>
          first letter to uper case
        </button>
      </div>

      <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to preview"}</p>
      </div>

    </>
  );
}
