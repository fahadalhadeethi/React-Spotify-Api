import React from 'react'

export function test(){
    // sample  #access_token=BQBxz-t9ntWvxRffTd0v3Z24pqJtL6eDIFDyUfW6ISUkVNQlV9FcHJ_01gseHFnKXiXcyoxEGo9qMCsdzKKewSHUTk1NbBr1jnNJY8iOr6aq1_2QUbO7HIrJ3VzceUcRRGf38Y0VfyhZRPDXewpeKXllOuJ4v-g&token_type=Bearer&expires_in=3600
   var Hash = window.location.hash
    Hash = Hash.substring(1)
   var index  =  Hash.indexOf("access_token=")
  var index1 = Hash.indexOf("&")
  var   auth = Hash.substring(index+13,index1)
   
        
        return auth = Hash.substring(index+13,index1)
       
 
     
}
export function deletehash(){
window.location.hash = ""
}



export default test