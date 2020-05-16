import React from 'react'

import './App.css';
import { Link } from 'react-router-dom';
function Listitems(props) {
  /* const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]*/
 // const personList = persons.map(person => <Person key={person.id} person={person} />)
console.log("s",props.list)
/*let content = [];
props.list.forEach((item, i) =>{
  console.log(i)
    if((i) % 3 == 0){
     
      content.push(
        
        <div className="row" >       
          <div  className="col">
          <div className="card" style={{width:"15rem" , height:"25rem"}} > 
          <img className="card-img-top" height="100px"width="100px" src={item.images.slice(0,1).map(img => img["url"])}/>
          <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
         <p className="card-text">{item.followers["total"]} followers</p>
          <h2>{item.popularity}</h2></div></div>
         </div>
        </div>
      )
    }else{
        content.push( <div  className="col">
        <div className="card" style={{width:"15rem" , height:"25rem"}} >
           <img className="card-img-top" height="100px"width="100px" src={item.images.slice(0,1).map(img => img["url"])}/>
           <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
       <p className="card-text">{item.followers["total"]} followers</p>
        <h2>{item.popularity}</h2></div></div>
       </div>);
    }
});
 // const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

  return(
  
<div width="100%" height="100%">
      {
    
content
      
      } 
  
      </div>
  )
    */
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


			rowContents.push(<div  className="col-md"> <div className="card" style={{width:"15rem" , height:"25rem" , margin:"3%"}} > 
      <img className="card-img-top" height="60%" width="60%" src={item.images.slice(0,1).map(img => img["url"])}/>
      <div className="card-body">
      <Link className="card-title" to={linkid} >{item.name}</Link>
     <p className="card-text">{item.followers["total"]} followers</p>
      <h2>{rating}</h2></div></div></div>);
			if (i % 4 === 3) {
				acc.push(<div className="row">{rowContents}</div>);
				rowContents = [];
			}
			return acc;
		},[])
       contents.push(<div className="row">{rowContents}</div>);
    
		return (
			<div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       
			{contents}
			</div>
		)  
}

export default Listitems
