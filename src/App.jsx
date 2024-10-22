import Header from './component/header/Header'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
function App() {


  return (
    <>
     <Header></Header>
    <main className='md:flex '>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
