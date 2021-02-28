import React from 'react';
import './pagination.css';
const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];
    for(let i = 1; i <=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
    }
	return (
         <>
           <nav>
           <ul className="pagination ml-4 paginate">
           {pageNumbers.map(number=>(
           	<li key={number} className="page-item">
           	<button onClick={()=>paginate(number)} className="btn btn-primary page-link ml-2">
              {number}
           	</button>
           	</li>))}
           </ul>
           </nav>
         </>
		)
} 
export default Pagination;