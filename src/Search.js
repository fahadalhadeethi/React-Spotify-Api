import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import {test,Usercontext,deletehash} from "./Auth"
import Listitems from "./listitems";
import { wait } from "@testing-library/react";
import axios from 'axios';

class Search extends Component {
 constructor() {
    super();
   
    this.timeout =  0
    if(window.location.hash!="")
    localStorage.setItem('session',test());
    this.state = {
        token: localStorage.getItem('session'),
        item: [],
        lastsearch : "",
        offset : 0,
        loading : [],
        next : 1
     
            }
           deletehash()
         
           
            this.inputref =React.createRef()
  
}

  componentDidMount() {
      
    window.addEventListener('scroll', this.handleScroll);
    if(localStorage.getItem("lastsearch")!=""){
      this.setState({
        offset : 0,
        next :1
    
    });
    this.getCurrentlyPlaying(this.state.token,localStorage.getItem("lastsearch"))
    
    }

  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
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
   
    const response = await fetch("https://api.spotify.com/v1/search?q="+query+"&type=artist&offset="+this.state.offset+"&limit=50",{method:"GET",
     headers: new Headers ({"Authorization": "Bearer " + token,
    "Content-Type": " Content-Type ",
     "Accept": "application/json" 
    })
  })
    const json = await response.json()
   // console.log("req" ,json.artists.next)
    if(json["error"]){
      this.props.history.push('/login')
      
    }
    this.setState({
        offset : this.state.offset + 50,
      item: this.state.item.concat(...json.artists.items),
        next: json.artists.next
    });
  } catch (error) {
    
  }
}else{
  this.setState({
    loading:[]
  })
}
}


   
  //} catch(error) {
    //  if(axios.isCancel(error)) {
        // Handle if request was cancelled
      //  console.log('Request canceled', error.message);
    //  } else {
        // Handle usual errors
      //  console.log('Something went wrong: ', error.message)
    //  }
  //}
   /* try {
      
      
       if(query==""){
        this.setState({
            
          item: [],
        
        }); 
        return
      }
      const response = await fetch("https://api.spotify.com/v1/search?q="+query+"&type=artist",{method:"GET",
       headers: new Headers ({"Authorization": "Bearer " + token,
      "Content-Type": " Content-Type ",
       "Accept": "application/json" 
      })
    })
  
      const json = await response.json()
      this.setState({
          
        item: json.artists.items,
      
      });
    } catch (error) {
      
    }*/
   
 
      
    /*  if(query==""){
        this.setState({
            
          item: [],
        
        }); 
        return
      }
      const response = await fetch("https://api.spotify.com/v1/search?q="+query+"&type=artist",{method:"GET",
       headers: new Headers ({"Authorization": "Bearer " + token,
      "Content-Type": " Content-Type ",
       "Accept": "application/json" 
      })
    })
      const json = await response.json()
      this.setState({
          
        item: json.artists.items,
      
      });
    } catch (error) {
      
    }*/
    
    

  /* $.ajax({
        
       
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
     console.log("call",this.state.item)
      }
    });*/
   
  
  changed = () =>{
  
  
  
    localStorage.setItem('lastsearch',this.inputref.current.value);
    console.log("done",this.state.token)
    this.setState({
      offset :0,
    item: [],
    next : 1
  });
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getCurrentlyPlaying(this.state.token,this.inputref.current.value)
    }, 600);
   
     
  }
  handleScroll = () =>{
    
    
    console.log(window.innerHeight + window.scrollY , "  ",document.body.offsetHeight )
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getCurrentlyPlaying(this.state.token,this.inputref.current.value)
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
  render() {
          if(localStorage.getItem("session")===""){
            return (
 
     
          
              <div style={{margin:"5px"}} >
                  <div class="input-group mb-3">
           
      
     <input type="text" ref={this.inputref} onChange={this.changed} className="form-control" placeholder="Search for an Artist..." aria-label="Username" 
     aria-describedby="basic-addon1" disabled/>
                   </div>
      <Listitems  list={this.state.item}/>
              </div>
   
          
           
          
         
       );
          }else{
            return (
 
     
          
              <div style={{margin:"5px"}} >
                  <div class="input-group mb-3">
           
      
     <input type="text" ref={this.inputref} value={localStorage.getItem("lastsearch")}onChange={this.changed} className="form-control" placeholder="Search for an Artist..." aria-label="Username"
     aria-describedby="basic-addon1"/>
                   </div>
      <Listitems  list={this.state.item}/>
      <div style={{textAlign:"center"}}> {this.state.loading}</div>
     
              </div>
   
          
           
          
         
       );
          }
    
    
  }
 
}

export default Search;