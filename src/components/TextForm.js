import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpCase =()=>{
    // console.log("uppercase is clicked")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" Text converted to uppercase","success")
     
  }
  const handleLowerCase =()=>{
    // console.log("uppercase is clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(" Text converted to lowercase","success")

     
  }
  const handleClearText =()=>{
    // console.log("uppercase is clicked")
    let newText =''
    setText(newText)
    props.showAlert(" Text is cleared","success")

     
  }
  

  const handleOnChange =(event)=>{
    // console.log("onchnge is clicked")
    setText(event.target.value)
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style ={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">  
       <textarea className="form-control mx-3 my-2" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'black'}}  on id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleUpCase}>Convert to uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleLowerCase}>Convert to lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleClearText}>Clear Text</button>
    
    </div>
    <div className="container my-3" style ={{color: props.mode === 'dark'?'white':'black'}}>
      <h2> Your text summery</h2>
      <p>your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
