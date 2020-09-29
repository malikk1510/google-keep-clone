import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header"
import Content from "./Components/Content"
import './App.css';

function App() {
  return (
   <>
      <div className="fluid " >
    <Header/>
    <Content/>
    </div>
   
   </>
  );
}

export default App;
