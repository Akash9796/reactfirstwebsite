import './App.css';
import Navbar from './Component/Navbar';
import Textforms from './Component/Textforms';
import Alert from './Component/Alert';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
   const [alert, setalert] = useState(null)
   const showAlert = (message,type)=>{
     setalert({
       msg:message,
       type:type,
     })
    setTimeout(()=>{
      setalert(null);
    },1000);
    
    }
    
   
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
  <Navbar title="TextUtiles" mode = {mode} toggleMode ={toggleMode} />
  <Alert Alert={alert}/>
  <div className="container">
  <Textforms heading="Enter the text to analyse" />
  </div>
  </>
  );
}

export default App;
