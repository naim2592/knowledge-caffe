import Header from './component/header/Header'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmark]=useState([])
  const handleAddToBookmark=({blog})=>{
          setBookmark([...bookmarks,blog])
          
  }

  return (
    <>
     <Header></Header>
    <main className='md:flex max-w-7xl mx-auto '>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </main>
    </>
  )
}

export default App
