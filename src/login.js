    
import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./listitems";


class Login extends Component {
  constructor(){
    super();
    localStorage.setItem("lastsearch","")
    localStorage.setItem("session","")
  }


  render() {
    return (
      <div className="App">
        <header className="App-header" >
   
          
            <a
              className="btn btn-success" 
              href={authEndpoint+"?client_id="+clientId+"&redirect_uri="+redirectUri+"&scope="+scopes+"&response_type=token&show_dialog=true"}
            >
              Login to Spotify
            </a>
        
       
        
       
        </header>
      </div>
    );
  }
}

export default Login;