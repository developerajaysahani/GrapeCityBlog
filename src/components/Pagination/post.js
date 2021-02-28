import React,{useState, useEffect} from 'react';
import Detail from './detail';
import Pagination from './pagination';
import axios from 'axios';
    const Posts = ()=> {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading]= useState(false);
	const [currentPage, setCurrentpage] = useState(1);
	const [postsPerPage] = useState(4);

	useEffect(()=>{
    const fetchPosts = async () =>{
   	setLoading(true);
   	const res = await axios.get('https://boiling-shelf.herokuapp.com/api/posts');
    setPosts(res.data);
    setLoading(false); 
   }
   fetchPosts();
	}, []);

	
	const indexOfLastpost = currentPage * postsPerPage;
	const indexOfFirstpost = indexOfLastpost - postsPerPage;
	const currentPosts    = posts.slice(indexOfFirstpost, indexOfLastpost);

	
	const paginate = (pageNumber)=>setCurrentpage(pageNumber);

	return(
            <div className="container">
             <Detail posts={currentPosts} loading={loading}/>
             <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
		);
};

export default Posts; 