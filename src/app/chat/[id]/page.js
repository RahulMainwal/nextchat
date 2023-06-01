import Link from 'next/link';
import React from 'react';

const Page = async ({ params }) => {
    const id = params.id;

    var letters = "0123456789ABCDEF";
      
    // html color code starts with #
    var color = '#';
      
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++){
    color += letters[(Math.floor(Math.random() * 16))];
    }

    return (

        <>
         <div style={{left: "0", top: "0", position: "sticky", zIndex: "2"}}>
            <div className="navbar bg-base-100" style={{margin: "0 0 -25px 0"}}>
            
                <div className="flex-1">
                    <Link href={"/"} className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                        <img style={{width: "25px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3YuQrCQBRG4YO+laWouHRu2Gip4kNro41gIeICLpGBKSQkWCjRe/k/mD6HJJM7ARERERGRAvWBLbAHxhg1Am5AEleIKWPMALi+RIS1A0oY0suICHdmiCFt4JKKuAMTDGllRDyAKYY0gXNGxAxDGjkRcwyp50QsMKQGnKxHVIFjKqLItYqby0cqwOGHEUlca4X80aO1jFv+V7h42V1tv64+iK5GFFdDo6sx/t3BKpzf8XDU3eDk58MGw7oxIMxFnV9fjIiIiIgIaU9zyuryINMk1gAAAABJRU5ErkJggg==" />
                        </button>
                    </Link>
                    <div>
                        <Link href={`/profile/${id}`} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`https://api.multiavatar.com/${id+".png"}`} />
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1">
          <div className="normal-case text-xl" style={{ cursor: "pointer", margin: "0 10px" }}>
            <div style={{ textAlign: "start" }}>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">Active</div>
            </div>
          </div>
        </div>
                </div>

                <div className="flex-none">
                <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            <div className="w-5 rounded-full">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nO3SsQkAIAxE0T+eIfsvoO6hCOnTGES4B2lzzQe5yIEJDMAoMIAV178csBg5z1vFgKRcmWZMmT7nyjRjypQKG4MDJKaPIqRCAAAAAElFTkSuQmCC" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" href={`/profile/${id}`}>
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Block</a></li>
                            <li><a>Clear Chat</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>

        
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${id+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Computer
                    &nbsp;<time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Kapil Sharma
                    &nbsp;<time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${id+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Computer
                    &nbsp;<time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Kapil Sharma
                    &nbsp;<time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${id+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Computer
                    &nbsp;<time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Kapil Sharma
                    &nbsp;<time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${id+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Computer
                    &nbsp;<time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Kapil Sharma
                    &nbsp;<time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${id+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Computer
                    &nbsp;<time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={`https://api.multiavatar.com/${Math.floor(Math.random() * 50)+".png"}`} />
                    </div>
                </div>
                <div className="chat-header">
                    Kapil Sharma
                    &nbsp;<time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble chat-bubble-primary">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>

            <br />
            <br />
            <br />

            <div style={{ justifyContent: "center", alignItems: "center", position: "fixed", bottom: "0", width: "100%" }}
                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
            >
                <div>
                    <button
                        className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        />
                        <button
                            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="ml-4">
                    <button
                        className="btn btn-success flex items-center justify-center rounded-xl text-white px-4 py-1 flex-shrink-0"
                    >
                        <span className="ml-2">
                            <svg
                                className="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </>

    );
};

export default Page;
