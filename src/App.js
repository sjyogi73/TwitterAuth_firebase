import './App.css';
import React, {useState} from 'react';
import {useStateValue} from './StateProvider';
import Login from "./Login";
function App() {
  const [{user}, dispatch] = useStateValue();
  return(
    <div className="app">
      {!user ? (
          <Login/>
        ):(
          <h1>Google Login Auth <b>SucessFull</b></h1>
        )}
    </div>
  );
}

export default App;
