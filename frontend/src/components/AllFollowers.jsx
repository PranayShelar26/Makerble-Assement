import React from 'react'
import FollowersList from './FollowersList'
import Sidebar from './Sidebar'
import Peoples from './Peoples'
import Navbar from './Navbar'
import Footer from './Footer'
const AllFollowers = () => {
  return (
    <>
    
    <Navbar />
        <div className='flex flex-row justify-between'>
        <div><Sidebar/></div>
      <div><FollowersList/></div>
      <div><Peoples/></div>
      
    </div> 
    <Footer/>
    </>
  )
}

export default AllFollowers
