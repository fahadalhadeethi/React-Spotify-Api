import React from 'react'

import './App.css';
import { Link } from 'react-router-dom';
function Listitems(props) {
 
console.log("s",props.list)

   let rowContents = [];
   let rating = []
  
		const contents = props.list.reduce((acc, item, i) => {
      rating= []
      let linkid = {
        pathname: "/album/"+item.name+"/"+item.id, 
        id: item.id,
        name : item.name
      }
       if(item.popularity<20 ){

       // times(1, (i) => {
          rating.push(<span class="fa fa-star checked"></span>);
          
       // });
       // _.times(4, (i) => { 
          rating.push(<span class="fa fa-star "></span>);
          rating.push(<span class="fa fa-star "></span>);
          rating.push(<span class="fa fa-star "></span>);
          rating.push(<span class="fa fa-star "></span>);
          
       // })
       }else {
         if(item.popularity>20 && item.popularity<=40 ){
       //   _.times(2, (i) => {
            rating.push(<span class="fa fa-star checked"></span>);
            rating.push(<span class="fa fa-star checked"></span>);
        //  });
        //  _.times(3, (i) => {
            rating.push(<span class="fa fa-star "></span>);
            rating.push(<span class="fa fa-star "></span>);
            rating.push(<span class="fa fa-star "></span>);
         // })
         }else{
           if(item.popularity>40 && item.popularity<=60 ){
          //  _.times(3, (i) => {
             
            rating.push(<span class="fa fa-star checked"></span>);
            rating.push(<span class="fa fa-star checked"></span>);
            rating.push(<span class="fa fa-star checked"></span>);

              
         //   });
          //  _.times(2, (i) => {
              rating.push(<span class="fa fa-star "></span>);
               rating.push(<span class="fa fa-star "></span>);
       //     })
           }else{
             if(item.popularity>60 && item.popularity<=80){
              // _.times(4, (i) => {
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
            //  });
            //  _.times(1, (i) => {
                rating.push(<span class="fa fa-star "></span>);
                
           //   }) 
             }else{
            //  _.times(5, (i) => {
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                rating.push(<span class="fa fa-star checked"></span>);
                
            //  });
             }
           }
         }
       }


			rowContents.push(<div  className="col-md"> <Link  style={{ textDecoration: 'none' }} to={linkid} > <div  className="card"  style={{width:"15rem" , color:"black",
     
       height:"25rem" , margin:"3%"}} > 
      <img className="card-img-top" height="60%" width="60%" src={item.images.slice(0,1).map(img => img["url"])}/>
      <div className="card-body">
      <p className="card-title"  >{item.name}</p>
     <p className="card-text">{item.followers["total"]} followers</p>
      <h3>{rating}</h3></div></div></Link></div>);
			if (i % 4 === 3) {
				acc.push(<div className="row">{rowContents}</div>);
				rowContents = [];
			}
			return acc;
		},[])
       contents.push(<div className="row">{rowContents}</div>);
    
		return (
			<div className="container">
       
       
			{contents}
			</div>
		)  
}

export default Listitems
