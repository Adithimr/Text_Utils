import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState, } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (message,type)=>{
  setAlert ({
    message:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null)
    },1000)
 }
 
 const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#14243a'
    showAlert("Dark mode has been enabled","success")
    // document.title = 'TextUtil-Dark Mode'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","success")
    // document.title = 'TextUtil-Light Mode'


  }

 }
const colorDarkSalmon = () =>{
  document.body.style.backgroundColor = '#E9967A'
  let mac = document.getElementById('myBox')
  mac.style.backgroundColor = "#E9967A"
 
}
const colorIndianRed = () =>{
  document.body.style.backgroundColor = '#CD5C5C'
  let mac = document.getElementById('myBox')
  mac.style.backgroundColor = "#CD5C5C"
  
}
const colorMediumSeaGreen = () =>{
  document.body.style.backgroundColor = '#3CB371'
  let mac = document.getElementById('myBox')
  mac.style.backgroundColor = "#3CB371"
 
}

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} home = "Home" about = "About"  toggleMode={toggleMode} colorDarkSalmon={colorDarkSalmon} colorIndianRed={colorIndianRed} colorMediumSeaGreen= {colorMediumSeaGreen} />
    {/* <Navbar title = "TextUtils"/> */}
    <Alert alert={alert}/>
  
    <div className="container my-3" >
    <Routes>
    <Route path ="/" element ={<TextForm  showAlert={showAlert} heading ="Try TextUtils - Word Counter,Character Counter,Case Converter" mode={mode} />}>
          </Route>
          <Route path="/About" element ={<About mode={mode}/>}  >
          </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
