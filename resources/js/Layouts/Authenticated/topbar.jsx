import { useState,useRef } from "react";
import {Link} from '@inertiajs/inertia-react'
// import route from "vendor/tightenco/ziggy/src/js";
export default function Topbar({name}) {
    const [dropDown, setDropdown]=useState(true)
    const dropDownTarget = useRef()

    // console.log(name)


    const triggerDropdown=()=>{
        if(dropDown){
            // console.log(`dropDown adalah ${dropDown} t`)
            dropDownTarget.current.classList.remove('hidden')
            // setDropdown(true)
        }else{
            // setDropdown(false)
            // console.log(`dropDown adalah ${dropDown} f`)
            dropDownTarget.current.classList.add('hidden')
        }
        setDropdown(!dropDown)
    }

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
                // style="background-image: url('/icons/ic_search.svg');"
            />
            <div className="flex items-center gap-4 cursor-pointer" onClick={triggerDropdown}>
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>
                <div className="collapsible-dropdown flex flex-col gap-2 relative" >
                    <div
                       
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        ref={dropDownTarget}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropDownTarget}
                    >
                        <a
                            href="/"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <Link 
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
            .top-search{
                backgroundImage
            }
            
            `}
            </style>
        </div>
    );
}
