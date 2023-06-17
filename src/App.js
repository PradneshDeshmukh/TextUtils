import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom'

let name = "Pradnesh";
function App() {

  const [mode , setMode] = useState('light'); // ye bata hen ki dark mode chalu hen ya nhi.
  const [alert , setAlert] = useState(null); // Ye dono state hen.

  const showAlert=(message, type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  

  const toggleMode = () =>{

    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor='#403c5a';
      showAlert("Dark mode has been enabled.", "success")
      document.title= "Textutils - Dark mode "
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled.", "success")
      document.title= "Textutils - Light mode "

    }
  }
  return (

    <>
<Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar /> */}
<Textform heading="Enter the text to analyze below." mode={mode}  toggleMode={toggleMode} showAlert={showAlert}/>


{/* <Router>
<Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>

          <Route exact path="/" element={<Textform heading="Enter the text to analyze below." mode={mode}  toggleMode={toggleMode} showAlert={showAlert}/>}>
            

          </Route>
        </Routes>
</div>
        </Router> */}






{/* <About/> */}


    </>
  );
}

export default App;
