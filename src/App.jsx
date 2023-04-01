import { useState } from 'react'
import './App.css'
import BlogQA from './components/BlogQA/BlogQA'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Blogs></Blogs>
    <BlogQA></BlogQA>
    </div>
  )
}

export default App
