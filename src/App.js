import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light'); // whether dark mode is enabled or not.
  const [NavText, newNavText] = useState('dark'); // whether dark mode is enabled or not.
  const [Allert, newAlert] = useState(null); // whether dark mode is enabled or not.

  function showAlert(message, type) {
    newAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      newAlert(null);

    }, 2000);
  }

  function toggleMode() {
    if (Mode === 'light') {

      setMode('dark');
      newNavText('light');
      document.body.style.backgroundColor = '#181818';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text-Editor-Dark Mode';
    }
    else {
      setMode('light');
      newNavText('dark')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text-Editor-Home';
    }

  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Editor" aboutText="About Text-Editor" mode={Mode} colorText={NavText} toggleMode={toggleMode} />
        <Alert alert={Allert} />
        <div className="container-main my-4">
          <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyse below" colorText={NavText} mode={Mode} showAlert={showAlert} />}
            />
          <Route
            path="/about"
            element={<About colorText={NavText} mode={Mode} />}
            />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
};

export default App;
