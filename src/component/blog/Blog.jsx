import PropTypes from 'prop-types'; 

import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog
    
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-md' src={cover} alt={`Cover picture of the tittle ${title}`} />
          <div className='flex justify-between items-center'>
               <div className='flex items-center space-x-6'>
                    <img className='w-16 h-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
             </div>
             <div>
                 <span>{reading_time} min Read <button onClick={()=>handleAddToBookmark({blog})}><IoBookmarksOutline /></button> </span>
             </div>
          </div>
           
           <h1 className='text-3xl'> {title}</h1>
           <p>
            {
                hashtags.map((hash,idx)=> <a key={idx} href="">#{hash}</a>)
            }
           </p>
           <button className='text-purple-600' onClick={()=>handleMarkAsRead(reading_time,id)}> <u>Mark As Read</u> </button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;