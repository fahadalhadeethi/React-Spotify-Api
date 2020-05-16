import React from 'react'

import './App.css';
function Album(props) {
 
   let rowContents = [];
   let rating = []
   
		const contents = props.list.reduce((acc, item, i) => {
      


			rowContents.push(<div  className="col-md"> <div className="card" style={{width:"15rem" , overflow: "inherit" , height:"25rem" , margin:"3%"}} > 
      <img className="card-img-top" height="50%" width="60%" src={item.images.slice(0,1).map(img => img["url"])}/>
      <div className="card-body">
      <h6 className="card-title"  >{item.name}</h6>
     <p className="card-text" style={{ overflow:"inherit"}}>{item.artists.map(artist => React.createElement('small',null,artist["name"]+" "))} <br></br><small className="text-muted">{item.release_date}</small><br></br><small class="text-muted">{item.total_tracks} tracks</small> </p>
      </div>  <a target={"_blank"}href={item.external_urls["spotify"]} ><div class="card-footer"  style={{textAlign:"center"}}>
      <small class="text-muted" >Preview on Spotify</small>
    </div></a>  </div></div>);
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
     <h2 style={{fontFamily:"arial"}}>{props.name}</h2>
     <small className="text-muted">Albums</small>
			{contents}
			</div>
		)  
}

export default Album
