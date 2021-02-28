import React from 'react';
import './detail.scss';
const Detail = ({posts, loading}) =>{
	if(loading){
		return <h2>Loading...</h2>
	}
	return(
	       <section className="main">
			<div className="row">
			{posts.map(post => (
				<div key={post.id} >
					<div className="col-lg-4">
						<div className=" card text-left shadow mb-4 p-2  maincard">
							<p> Name:       {post.name}</p>
							<p> Address:    {post.address}</p>
							<p> Phone:      {post.phone}</p>
							<p> Start Date: {post.start_date}</p>
							<p> End Date:   {post.end_date} </p>
							<p> Ble_Mac:    {post.ble_mac}</p>
							<p> Dmac:       {post.dmac}</p>
							<p> Gmac_Lattitude: {post.gmac_lattitude}</p>
							<p> Gmac_Longitude:{post.gmac_longitude}</p>
							<p> Turned_Positive:{post.turned_positive.value}</p>
							<p> Note:{post.note}</p>
						</div>	
					</div>
				</div>
			))}
		 </div>
	</section>	 
	 );
	}

export default Detail; 



