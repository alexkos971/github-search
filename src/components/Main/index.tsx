import React, { useState, createContext } from 'react';
import { Route, Redirect } from "react-router-dom";

import "./Main.scss"

import Search from '../../pages/Search';
import User from "../../pages/User"

export const Result = createContext(null);

const Main = () => {

  const [result, setResult] = useState(null)
  

  return (
    <div className="app-main">
      <div className="app-main-bg"></div>
        
          <Redirect to="/search" />

          <Result.Provider value={{ result, setResult }}>
            <Route path="/search" component={Search}/>
            <Route path="/user/:name" component={User}/>  
          </Result.Provider>
    </div>
  );
}

export default Main;
