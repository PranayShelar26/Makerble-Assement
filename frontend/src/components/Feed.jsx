import React from 'react'
import Sidebar from './Sidebar'
import Peoples from './Peoples'
import NewsFeed from './NewsFeed'
import Navbar from './Navbar'
import Footer from './Footer'

const Feed = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-row justify-between'>
        <div><Sidebar/></div>
      <div><NewsFeed/></div>
      <div><Peoples/></div>

      
    </div>
    <Footer/>
    </>
  )
}

export default Feed
