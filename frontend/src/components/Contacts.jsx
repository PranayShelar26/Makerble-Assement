import React from 'react'
import Contact_img from './images/Contact-img.png'
const Contacts = () => {
    let Contact=[
        {
            id:1,
            Image:Contact_img,
            Name:'Pranay Shelar',
            Updated:2
        },
        {
            id:2,
            Image:Contact_img,
            Name:'John Claus',
            Updated:8
        },
        {
            id:3,
            Image:Contact_img,
            Name:'Brian Smith',
            Updated:10
        },
        {
            id:4,
            Image:Contact_img,
            Name:'Alice Parker',
            Updated:14
        },
        
    ]

  return (
    <>
      <div className='p-6 flex flex-col gap-4 border-b-2 border-gray-300'>
            <div className='flex flex-row justify-between items-center mb-2'>
                <div className='text-4xl font-semibold'>Contact</div>
                <div><a className='text-xl bg-[#057D74] hover:bg-[#1a6460] p-3 transition-all 0.3s ease-in-out  text-white rounded-lg font-semibold' href="">+ New Contact</a></div>
            </div>
            { Contact.map((contact)=>{
                return (
                    <a href='' key={contact.id} className='flex flex-row  gap-1 mt-1 p-2 hover:bg-gray-200 rounded-xl'>
                    <div className='w-[50px] h-[50px]'>
                        <img src={contact.Image} alt="" className='w-100 h-100 object-cover' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-xl font-[500] hover:text-[#00B0DD]'>{contact.Name}</div>
                        <div className='text-xl text-gray-700'>Updated {contact.Updated} days ago</div>
                    </div>
            </a>
                )
            })}
            
            
            <div>
                <a href="" className="text-lg text-[#057D74] hover:text-[#15433f]">View all</a>
            </div>
        </div>
    </>
  )
}

export default Contacts
