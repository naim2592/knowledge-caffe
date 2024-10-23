import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3 ">
            
          <h1 className="text-3xl">Blogs {blogs.length}</h1>
          {
            blogs.map(blog=><Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}></Blog>)
          }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blogs;