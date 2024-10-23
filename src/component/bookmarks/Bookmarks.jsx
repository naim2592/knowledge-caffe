import PropTypes from "prop-types";
import Bookmark from "../bookmark.jsx/Bookmark";

const Bookmarks = ({bookmarks}) => {
   
    return (
        <div className="w-1/3 bg-slate-300 text-center rounded-md m-4">
            <h2 className="text-3xl">Bookmarks {bookmarks.length}</h2>
           
           {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired
}
export default Bookmarks;