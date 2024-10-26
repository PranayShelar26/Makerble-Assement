import React from 'react'
import Profileimg from './images/profile-img.png'
const NewsFeed = () => {
  return (
    <>
        <div className='mt-[100px] w-[1200px] justify-center ml-[400px] h-auto flex flex-col px-7 py-7 gap-5 '>
         {/* Post progress */}
          <div className='flex flex-row items-center gap-5 border-b-2 border-gray-400 pb-10 justify-between'>
            <div className='w-[80px] h-[80px] items-center rounded-full overflow-hidden'><img className='w-full h-full object-contain' src={Profileimg} alt="" /></div>
            <div><input type="text" className='text-2xl p-4 border-2 rounded-lg border-gray-400 w-[850px]' name="" placeholder='Share your progess...' id="" /></div>
              <div className=''><button className='text-3xl  rounded-lg font-semibold text-white py-4 px-10 transition-all 0.3s ease-in-out bg-[#FF5375] hover:bg-[#c3304d]'>Post</button></div>
          </div>
        {/*New Feed heading*/}
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row justify-between items-center'>
              <div className='text-4xl font-semibold uppercase'>NewsFeed</div>
              <a href="">
              <div className='flex flex-row items-center '>
              <div className='text-xl text-[#057D74]'>Story Filters </div>
              <div><span className="material-symbols-outlined text-4xl rotate-180 text-[#057D74]">
              arrow_drop_up
              </span></div>
              </div>
              </a>
            </div>
          </div>

          {/*Feed*/}
          <div className='flex flex-col gap-5 border-b-2 pb-10 border-gray-400'>
              <div className='flex flex-row items-center gap-4'>
              <div className='w-[80px] h-[80px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-contain' src={Profileimg} alt="" />
              </div>
              <div className='flex flex-col gap-1s'>
                <div className='flex flex-row gap-3 items-center'>
                  <div className='text-2xl font-semibold text-[#00B0DD]'>Pranay Shelar</div>
                  <div className='bg-[#FF4725] text-white px-2 py-1 rounded-2xl font-semibold'>Progress Update</div>
                </div>
                <div className='text-xl text-gray-600'>
                Thursday, 21 Dec 24, 5:50pm
                </div>
              </div>
              <div className='ml-auto flex flex-row align-middle items-center gap-5'>
                <span className="material-symbols-outlined text-3xl text-[#00B0DD]">
                  settings
                  </span>
              </div>
              </div>
              <div className='text-2xl'>
              1 by <a href="" className='text-[#00B0DD]'>Steve Johnson </a> working at <a href="" className='text-[#00B0DD]'>Harvesting</a>  starting at 10:00 on 21st December on <a href="" className='text-[#00B0DD]'>Cereal Farming</a> project for Farming Test.
              </div>
              <div >
                <a href="" className='p-3 rounded-xl text-center bg-[#057D74] hover:bg-[#1a6460]  transition-all 0.3s ease-in-out text-2xl text-white'>
                  Expand Story
                </a>
              </div>

              <div className='flex flex-row gap-5 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    favorite
                    </span>
                <span className='text-2xl'>
                  Like
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    chat_bubble
                    </span>
                <span className='text-2xl'>
                  1 Comments
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    bookmark_star
                    </span>
                <span className='text-2xl'>
                  0 Favourites
                </span>
                </div>
              </div>

              <div className='flex flex-row items-center gap-5'>
              <div className='w-[60px] h-[60px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Profileimg} alt="" />
              </div>
                  <div className='w-[1000px]'>
                  <input type="text" placeholder='Write a comment...' className='border-2  border-gray-400 rounded-lg p-2 w-full text-2xl' name="" id="" />

                  </div>
                  <div>
                  <button className='bg-[#FF5375] px-6 transition-all 0.3s ease-in-out hover:bg-[#c3304d] py-3 text-2xl text-white rounded-lg font-semibold'>Post</button>

                  </div>
                </div>
          </div>
          <div className='flex flex-col gap-5 border-b-2 pb-10 border-gray-400'>
              <div className='flex flex-row items-center gap-4'>
              <div className='w-[80px] h-[80px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-contain' src={Profileimg} alt="" />
              </div>
              <div className='flex flex-col gap-1s'>
                <div className='flex flex-row gap-3 items-center'>
                  <div className='text-2xl font-semibold text-[#00B0DD]'>Pranay Shelar</div>
                  <div className='bg-[#FF4725] text-white px-2 py-1 rounded-2xl font-semibold'>Progress Update</div>
                </div>
                <div className='text-xl text-gray-600'>
                Thursday, 21 Dec 24, 5:50pm
                </div>
              </div>
              <div className='ml-auto flex flex-row align-middle items-center gap-5'>
                <div className='text-xl'>
                  Posted 4 days ago
                </div>
                <span className="material-symbols-outlined text-3xl text-[#00B0DD]">
                  settings
                  </span>
              </div>
              </div>
              <div className='text-2xl'>
              1 by <a href="" className='text-[#00B0DD]'>Steve Johnson </a> working at <a href="" className='text-[#00B0DD]'>Harvesting</a>  starting at 10:00 on 21st December on <a href="" className='text-[#00B0DD]'>Cereal Farming</a> project for Farming Test.
              </div>
              <div >
                <a href="" className='p-3 rounded-xl text-center bg-[#057D74] hover:bg-[#1a6460]  transition-all 0.3s ease-in-out text-2xl text-white'>
                  Expand Story
                </a>
              </div>

              <div className='flex flex-row gap-5 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    favorite
                    </span>
                <span className='text-2xl'>
                  Like
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    chat_bubble
                    </span>
                <span className='text-2xl'>
                  1 Comments
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    bookmark_star
                    </span>
                <span className='text-2xl'>
                  0 Favourites
                </span>
                </div>
              </div>

              <div className='flex flex-row items-center gap-5'>
              <div className='w-[60px] h-[60px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Profileimg} alt="" />
              </div>
                  <div className='w-[1000px]'>
                  <input type="text" placeholder='Write a comment...' className='border-2  border-gray-400 rounded-lg p-2 w-full text-2xl' name="" id="" />

                  </div>
                  <div>
                  <button className='bg-[#FF5375] px-6 transition-all 0.3s ease-in-out hover:bg-[#c3304d] py-3 text-2xl text-white rounded-lg font-semibold'>Post</button>

                  </div>
                </div>
          </div>
          <div className='flex flex-col gap-5 border-b-2 pb-10 border-gray-400'>
              <div className='flex flex-row items-center gap-4'>
              <div className='w-[80px] h-[80px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-contain' src={Profileimg} alt="" />
              </div>
              <div className='flex flex-col gap-1s'>
                <div className='flex flex-row gap-3 items-center'>
                  <div className='text-2xl font-semibold text-[#00B0DD]'>Pranay Shelar</div>
                  <div className='bg-[#FF4725] text-white px-2 py-1 rounded-2xl font-semibold'>Progress Update</div>
                </div>
                <div className='text-xl text-gray-600'>
                Thursday, 21 Dec 24, 5:50pm
                </div>
              </div>
              <div className='ml-auto flex flex-row align-middle items-center gap-5'>
                <div className='text-xl'>
                  Posted 4 days ago
                </div>
                <span className="material-symbols-outlined text-3xl text-[#00B0DD]">
                  settings
                  </span>
              </div>
              </div>
              <div className='text-2xl'>
              1 by <a href="" className='text-[#00B0DD]'>Steve Johnson </a> working at <a href="" className='text-[#00B0DD]'>Harvesting</a>  starting at 10:00 on 21st December on <a href="" className='text-[#00B0DD]'>Cereal Farming</a> project for Farming Test.
              </div>
              <div >
                <a href="" className='p-3 rounded-xl text-center bg-[#057D74] hover:bg-[#1a6460]  transition-all 0.3s ease-in-out text-2xl text-white'>
                  Expand Story
                </a>
              </div>

              <div className='flex flex-row gap-5 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    favorite
                    </span>
                <span className='text-2xl'>
                  Like
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    chat_bubble
                    </span>
                <span className='text-2xl'>
                  1 Comments
                </span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                <span className="material-symbols-outlined text-4xl">
                    bookmark_star
                    </span>
                <span className='text-2xl'>
                  0 Favourites
                </span>
                </div>
              </div>

              <div className='flex flex-row items-center gap-5'>
              <div className='w-[60px] h-[60px] items-center rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Profileimg} alt="" />
              </div>
                  <div className='w-[1000px]'>
                  <input type="text" placeholder='Write a comment...' className='border-2  border-gray-400 rounded-lg p-2 w-full text-2xl' name="" id="" />

                  </div>
                  <div>
                  <button className='bg-[#FF5375] px-6 transition-all 0.3s ease-in-out hover:bg-[#c3304d] py-3 text-2xl text-white rounded-lg font-semibold'>Post</button>

                  </div>
                </div>
          </div>

        </div> 
    </>
  )
}

export default NewsFeed
