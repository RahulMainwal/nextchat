import Header from '@/app/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
<div className="bg-gray-200 font-sans w-full flex flex-row justify-center items-center" style={{height: "85vh"}}>
  <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} alt="" />
     <div className="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
     <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
     <div className="text-center font-normal text-lg">Kerala</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
         Front end Developer, avid reader. Love to take a long walk, swim
       </p>
     </div>
     <hr className="mt-8" />
     <div className="flex p-4">
       <div className="w-1/2 text-center">
         <span className="font-bold">1.8 k</span> Followers
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
         <span className="font-bold">2.0 k</span> Following
       </div>
     </div>
  </div>
</div>
    </div>
  )
}

export default page
