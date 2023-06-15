import React from 'react'

export default function About(props) {
//  const[myStyle,setMyStyle] = useState({
//   color:'dark',
//   backgroundColor:'white '
// })
let myStyle = {
  color: props.mode ==='dark'?'white':'rgb(47 70 102)',
  backgroundColor:props.mode ==='dark'?'rgb(47 70 102)':'white',
  borderColor:props.mode ==='dark'?'white':'black'
}
  return (
    
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
              TextUtils gives you the way to analyze your text quickly and efficiently.Be it word count or character count or time required to read the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count and word count statistics for given text.TextUtils reports the number of charactersand words.Thus it is suitable for writting text with word/character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser compatable.</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any webrowser b such as Chrome,Firefox,Internet Explorer,Sfari,Opera.It suits to count characters in Facebook,blog,book,excel document,pdf document,essays  etc .
            </div>
          </div>
  </div>
</div>
    </div>
  )
}
