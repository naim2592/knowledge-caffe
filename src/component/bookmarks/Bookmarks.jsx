import PropTypes from "prop-types";
import Bookmark from "../bookmark.jsx/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
   
    return (
        <div className="w-1/3 bg-slate-300 text-center rounded-md m-4">
            <h2 className="text-4xl  bg-white rounded-md p-4 m-4">Reading Time {readingTime}</h2>
            <h2 className="text-3xl bg-white rounded-md p-4 m-4">Bookmarks Blogs : {bookmarks.length}</h2>
           
           {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;