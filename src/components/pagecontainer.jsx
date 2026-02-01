import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Pagecontainer({children}){
    return (
        <>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col  sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-20 ml-[60px] sm:ml-0">
                <Sidebar></Sidebar>
                
                <div className='flex w-full flex-col gap-6 sm:gap-8 md:gap-4'>
                <Outlet></Outlet>
                </div>
                
            </div>
        </>
    )
}