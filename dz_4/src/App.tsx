import React, { useEffect, useState } from 'react';
import './App.css';
import Start from "./components/StartButton";


function App() {
  const [html, setHtml] = useState(<></>);
  useEffect(() =>{
    setHtml(Start(setHtml))
  },[]);
  return (
    <>
      {html}
    </>
  );
}

export default App;
