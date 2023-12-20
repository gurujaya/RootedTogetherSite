import React from "react";
import Link from "next/link";
import List from "../components/icons/List";



const BlogNavBar = () => {
    return (
        <div>
            <div className="flex flex-row space-y-5 items-center justify-center md:justify-start md:px-12 border-b border-zinc-500 w-full">
                    
            </div>
    
            
            <div className='flex flex-row space-x-5 items-center justify-center md:justify-start md:px-12 border-b border-zinc-500 w-full'>  
                <List className="hover:dark:bg-dark"></List>
            </div>

            

        </div>
    )
}

export default BlogNavBar