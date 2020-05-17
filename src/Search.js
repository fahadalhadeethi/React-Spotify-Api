import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import {test,Usercontext,deletehash} from "./Auth"
import Listitems from "./listitems";


class Search extends Component {
 constructor() {
    super();
    if(window.location.hash!="")
    localStorage.setItem('session',test());
    this.state = {
        token: localStorage.getItem('session'),
        item: [],
        lastsearch : ""
       

            }
           deletehash()
         
           
            this.inputref =React.createRef()
  
}

  componentDidMount() {


    if(localStorage.getItem("lastsearch")!="")
    this.getCurrentlyPlaying(this.state.token,localStorage.getItem("lastsearch"))
    


  }
  

  getCurrentlyPlaying(token,query) {
    if(query==""){
      this.setState({
          
        item: [],
      
      }); 
      return
    }
    

    $.ajax({
        
       
        url: "https://api.spotify.com/v1/search?q="+query+"&type=artist" ,
       
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Content-Type", " Content-Type ");
        xhr.setRequestHeader("Accept", "application/json" );
      },
      success: data => {
        
        this.setState({
          
          item: data.artists.items,
        
        });
       console.log(this.state.item)
      }
    });
  }
  changed = () =>{
  
  
  
  localStorage.setItem('lastsearch',this.inputref.current.value);
    console.log("done",this.state.token)
       this.getCurrentlyPlaying(this.state.token,this.inputref.current.value)
          
     
  }

  render() {
          if(localStorage.getItem("session")===""){
            return (
 
     
          
              <div style={{margin:"5px"}} >
                  <div class="input-group mb-3">
           
      
     <input type="text" ref={this.inputref} onChange={this.changed} className="form-control" placeholder="Search for an Artist..." aria-label="Username" value={localStorage.getItem("lastsearch")}
     aria-describedby="basic-addon1" disabled/>
                   </div>
      <Listitems  list={this.state.item}/>
              </div>
   
          
           
          
         
       );
          }else{
            return (
 
     
          
              <div style={{margin:"5px"}} >
                  <div class="input-group mb-3">
           
      
     <input type="text" ref={this.inputref} onChange={this.changed} className="form-control" placeholder="Search for an Artist..." aria-label="Username" value={localStorage.getItem("lastsearch")}
     aria-describedby="basic-addon1"/>
                   </div>
      <Listitems  list={this.state.item}/>
              </div>
   
          
           
          
         
       );
          }
    
    
  }
 
}

export default Search;