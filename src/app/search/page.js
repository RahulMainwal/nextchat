import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div style={{left: "0", top: "0", position: "sticky", zIndex: "2"}}>
            <div className="navbar bg-base-100" style={{margin: "0 0 -25px 0"}}>
            
                <div className="flex-1">
                    <Link href={"/"} className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                        <img style={{width: "25px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3YuQrCQBRG4YO+laWouHRu2Gip4kNro41gIeICLpGBKSQkWCjRe/k/mD6HJJM7ARERERGRAvWBLbAHxhg1Am5AEleIKWPMALi+RIS1A0oY0suICHdmiCFt4JKKuAMTDGllRDyAKYY0gXNGxAxDGjkRcwyp50QsMKQGnKxHVIFjKqLItYqby0cqwOGHEUlca4X80aO1jFv+V7h42V1tv64+iK5GFFdDo6sx/t3BKpzf8XDU3eDk58MGw7oxIMxFnV9fjIiIiIgIaU9zyuryINMk1gAAAABJRU5ErkJggg==" />
                        </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Search Users" className="input input-bordered w-full" style={{marginRight: "20px"}} />
                </div>

            </div>
            <div className="divider"></div>
        </div>
    </div>
  )
}

export default page
