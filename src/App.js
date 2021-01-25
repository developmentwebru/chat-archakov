import React from 'react';
import Auth from "./pages/Auth/index";
import Home from "./pages/Home/index";
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='wrapper'>
        <Route exact path={['/', '/login', '/register']} component={Auth} />
        <Route exact path='/im' component={Home} />



    </div>
  );
}

export default App;
