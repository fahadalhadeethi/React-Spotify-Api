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
        loading : [],
        offset:0,
        next:1
    //  this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
            }
         
           

    // console.log(index,index1)
   //  console.log(acc)
}
  componentDidMount() {
    // Set token
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      offset : 0,
      next:1
  
  });
    this.getCurrentlyPlaying(this.state.token,this.props.match.params.id)
  //  let _token1 = hash.access_token;

  }
  handleScroll = () =>{
    
    var scrollPos =  window.scrollY;
    //console.log(window.innerHeight + window.scrollY , "  ",document.body.offsetHeight)
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getCurrentlyPlaying(this.state.token,this.props.match.params.id)
    }, 600);
    
      this.setState({
        loading:[],
      
    
    });
  
    }
    if(this.state.next!==null){
    this.setState({
      loading:[<div   class="spinner-border text-dark" role="status"><span  class="sr-only">Loading...</span></div>],
    
  
  });
}
   //     this.getCurrentlyPlaying(this.state.token,localStorage.getItem("lastsearch"))
   // }
  //  this.loading.pop()
      
  
}
  

  async getCurrentlyPlaying(token,query) {
  
   
    if(this.state.next!==null){
    try{
       if(query==""){
         this.setState({
             
           item: [],
           loading: []
         }); 
         return
       }

       const response = await fetch("https://api.spotify.com/v1/artists/"+query+"/albums?offset="+this.state.offset+"&limit=50",{method:"GET",
        headers: new Headers ({"Authorization": "Bearer " + token,
       "Content-Type": " Content-Type ",
        "Accept": "application/json" 
       })
     })
       const json = await response.json()
       console.log(json)
       if(json["error"]){
         this.props.history.push('/login')
         
       }
       this.setState({
           offset : this.state.offset + 50,
         item: this.state.item.concat(...json.items),
         next: json.next
       });
     } catch (error) {
       console.log(error)
     }
    }else{
      this.setState({
        loading:[]
      })

    }
   }

  render() {
      
    return (
 
     
          
           <div style={{margin:"5px"}} >

          <Album name={this.props.match.params.name}  list={this.state.item}/>
          <div style={{textAlign:"center"}}> {this.state.loading}</div>
 
 </div>

       
        
       
      
    );
  }
 
}

export default Albums;