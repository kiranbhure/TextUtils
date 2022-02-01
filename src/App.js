import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dart mode has been enabled','success');
      document.title = ('TextUtils-DarkMode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled','success');
      document.title = ('TextUtils-LightMode');
    }
  }

  return (
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" about="" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className='container my-3' >
  {/* <Switch>
      <Route exact path="/about"> */}
        {/* <About /> */}
      {/* </Route>
      <Route exact path="/"> */}
        <TextForms showAlert={showAlert} hedding="Enter The Text To Analyze" mode={mode}/>  
      {/* </Route>
  </Switch> */}
  </div>
  {/* </Router> */}
  </>  
  );
}

export default App;

