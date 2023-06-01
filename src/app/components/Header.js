import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div style={{left: "0", top: "0", position: "sticky", zIndex: "2"}}>
            <div className="navbar bg-base-100" style={{margin: "0 0 -25px 0"}}>
                <div className="flex-1">
                    <Link className="normal-case text-2xl font-bold" style={{ cursor: "pointer" }} href={"/"}>nextChat</Link>
                </div>
                <div className="flex-none">
                    <Link href={"/search"}>
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" href={"/profile"}>
                                    Profile
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Header
