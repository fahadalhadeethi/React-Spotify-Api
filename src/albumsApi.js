import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import {test,Usercontext} from "./Auth"
import Album from "./albums";


class Albums extends React.Component {
 constructor() {
    super();
   
    this.state = {
        token: localStorage.getItem('session'),
        item: [],
       
    //  this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
            }
         
           

    // console.log(index,index1)
   //  console.log(acc)
}
  componentDidMount() {
    // Set token
    this.getCurrentlyPlaying(this.state.token,this.props.match.params.id)
  //  let _token1 = hash.access_token;

  }
  

  getCurrentlyPlaying(token,query) {
    // Make a call using the token
    $.ajax({
        
       
        url: "https://api.spotify.com/v1/artists/"+query+"/albums" ,
       
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Content-Type", " Content-Type ");
        xhr.setRequestHeader("Accept", "application/json" );
      },
      success: data => {
        
        this.setState({
          
          item: data.items,
        
        });
       console.log("albums",this.state.item)
      }
    });
  }

  render() {
      
    return (
 
     
          
           <div style={{margin:"5px"}} >

          <Album name={this.props.match.params.name}  list={this.state.item}/>
   
 
 </div>

       
        
       
      
    );
  }
 
}

export default Albums;