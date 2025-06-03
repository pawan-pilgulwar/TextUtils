import './App.css';
import Alerts from './componnts/Alerts';
import About from './componnts/About';
import Navbar from './componnts/Navbar';
import TextForms from './componnts/TextForms';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1000);
  };

  const toggleMode = () => {
      if(mode === 'dark') {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled" , "success");
      } else {
        setMode('dark');
        document.body.style.backgroundColor = '#0b0b39';
        showAlert("Dark mode enabled" , "success");
      }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForms heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" alert={alert} showAlert={showAlert} mode={mode} />} />
          <Route path="/About" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
