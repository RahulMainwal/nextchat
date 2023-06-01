import React from 'react'
import Header from '../components/Header'

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
       <button className="btn btn-ghost">
       <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{width: "30px"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z"></path><path d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z"></path></g></svg>
  &nbsp;
</button>
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
       <button className='btn btn-primary' >Save</button>
       </div>
     </div>
  </div>
</div>
    </div>
  )
}

export default page
