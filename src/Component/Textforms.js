import React, {useState} from 'react'

export default function Textforms(props) {
    const upper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lower = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  const clear = ()=>{
    setText('');
}
    const Onchange = (event)=>{
        console.log("Change is going on");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    
    return (
        <>
    <h1>
        {props.heading} 
    </h1>
    <div className="mb-3 container">
      <textarea

        className="form-control"
        id="mybox"
        rows={8}
        value={text}
        placeholder="Enter your text"
        onChange = {Onchange}
      />
      <button className="btn btn-primary m-2 " onClick = {upper} >Convert to UpperCase</button>
      <button className="btn btn-primary m-2 " onClick = {lower} >Convert to LowerCase</button>
      <button className="btn btn-primary m-2 " onClick = {clear} >Clear</button>
    </div>
    <div className="container">
      <h2>{text===""?"Enter Somthing":"Preview your text here"}</h2>
      <p>{text}</p>
      Word Count {text.split(" ").length - 1} Letter Count {text.length};
    </div>
    
  </>
  
  )
}
