import React from 'react';
import Link from "next/link";

const Chats = () => {
  var letters = "0123456789ABCDEF";
      
  // html color code starts with #
  var color = '#';
    
  // generating 6 times as HTML color code consist
  // of 6 letter or digits
  for (var i = 0; i < 6; i++){
  color += letters[(Math.floor(Math.random() * 16))];
  }
  return (
    <Link href={`/chat/${Math.floor(Math.random() * 50)}`}>
       <div className="navbar bg-base-100 btn btn-ghost shadow" style={{height: "auto", marginTop: "15px"}}>
        <div className="flex-none">
          <div className="avatar online" style={{zIndex: "0"}}>
            <div className="mask mask-squircle w-12 h-12">
              <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="normal-case text-xl" style={{ cursor: "pointer", margin: "0 10px" }}>
            <div style={{ textAlign: "start" }}>
              <div className="font-lg">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States United States United States United States</div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <span className="badge badge-secondary badge-sm indicator-item" style={{ padding: "13px", fontSize: "15px", backgroundColor: color, borderColor: color }}>8</span>
        </div>
      </div>

    </Link>
  )
}

export default Chats
