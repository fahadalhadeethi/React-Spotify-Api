import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import {test,Usercontext} from "./Auth"
import Listitems from "./listitems";


class Search extends Component {
 constructor() {
    super();
    localStorage.setItem('session',test());
    this.state = {
        token: localStorage.getItem('session'),
        item: [],
        lastsearch : ""
       
    //  this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
            }
         
           
            this.inputref =React.createRef()
    // console.log(index,index1)
   //  console.log(acc)
}
  componentDidMount() {
    // Set token

    if(localStorage.getItem("lastsearch")!="")
    this.getCurrentlyPlaying(this.state.token,localStorage.getItem("lastsearch"))
  //  let _token1 = hash.access_token;

  }
  

  getCurrentlyPlaying(token,query) {
    if(query==""){
      this.setState({
          
        item: [],
      
      }); 
      return
    }
    
    // Make a call using the token
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
  
   // console.log(acc)
  
  localStorage.setItem('lastsearch',this.inputref.current.value);
    console.log("done",this.state.token)
       this.getCurrentlyPlaying(this.state.token,this.inputref.current.value)
          
      // this.setState({item : "waw"})
  }

  render() {
  
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
Search.contextType= Usercontext
export default Search;