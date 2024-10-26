import React, { useState } from 'react'
import Contact_img from './images/Contact-img.png'
import Profileimg from './images/profile-img.png'
import { Link } from 'react-router-dom'

const Suggestions = () => {
    let suggestions= [
        {
        id:1,
        Image:Profileimg,
        Name: 'Pranay',
    },{
        id:2,
        Image:Profileimg,
        Name: 'Shawn',
    },{
        id:3,
        Image:Profileimg,
        Name: 'Frank',
    },{
        id:4,
        Image:Profileimg,
        Name: 'Trevour',
    },,{
        id:5,
        Image:Profileimg,
        Name: 'Mike',
    }
] 

const scrolltoTop=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;   
}

const [followState, setFollowState] = useState(
    suggestions.reduce((acc, suggestion) => {
      acc[suggestion.id] = false; // Initializing each suggestion with 'not followed'
      return acc;
    }, {})
  );

  const toggleFollow = (id) => {
    // Toggle the follow state for the specific suggestion by its id
    setFollowState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className='p-6 flex flex-col gap-4 border-b-2 border-gray-300'>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-4xl font-semibold'>People you may Know</div>
               </div>

               {suggestions.slice(0,4).map((suggestion)=>{
                return (
                  <div key={suggestion.id} className='flex flex-row justify-between items-center align-middle gap-2 mt-3 p-1  '>
                   <div className='flex flex-row items-center '>
                   <a href='' className='w-[55px] h-[55px] items-center rounded-full overflow-hidden'>
                        <img className='w-full h-full object-contain' src={suggestion.Image} alt="" />
                    </a>
                    <a href='' className='px-2 '>
                        <div className='text-xl font-[500] hover:text-[#00B0DD]'>{suggestion.Name}</div>
                    </a>
                    </div>
                    <div>
                        <button onClick={()=>toggleFollow(suggestion.id)} className={`text-xl ${followState[suggestion.id] ? 'bg-white border-2 border-[#057D74] hover:bg-gray-200': 'bg-[#057D74] hover:bg-[#1a6460] text-white'} px-5 py-2   rounded-lg font-semibold`}>
                            {followState[suggestion.id] ?'Following' : 'Follow' }
                             </button>
                    </div>
            </div>
                )
                    
               })}
            <div >
          <Link to='/suggestion' onClick={scrolltoTop} className="text-lg text-[#057D74] hover:text-[#15433f]">View all</Link>
        </div>
        </div>
    </>
  )
}

export default Suggestions
