import Header from './component/header/Header'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmark]=useState([])
  const [readingTime,setTime]=useState(0)

  const handleAddToBookmark=({blog})=>{
          setBookmark([...bookmarks,blog])
          
  }
  const handleMarkAsRead=(time)=>{
    setTime(readingTime+time);
    
  }

  return (
    <>
     <Header></Header>
    <main className='md:flex max-w-7xl mx-auto '>
    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </main>
    </>
  )
}

export default App
