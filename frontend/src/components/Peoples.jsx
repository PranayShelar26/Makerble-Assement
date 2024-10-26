import React from 'react'
import Contacts from './Contacts'
import Followers from './Followers'
import Suggestions from './Suggestions'
const Peoples = () => {
  return (
    <>
    <div className='flex flex-col bg-white border-l-2 pt-[100px] border-gray-300 h-full w-[460px]'>
        <Contacts/>
        <Followers/>
        <Suggestions/>
    </div> 
    </>
  )
}

export default Peoples
