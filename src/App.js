import React from 'react'
import {Route} from "react-router-dom";

import {Auth, Home} from "Pages";

function App() {
  return (
    <div className="wrapper">
        <Route exact path={["/", "/login", "/registration"]} component={Auth}/>
        <Route exact path="/Im" component={Home}/>
    </div>
  );
}

export default App;
