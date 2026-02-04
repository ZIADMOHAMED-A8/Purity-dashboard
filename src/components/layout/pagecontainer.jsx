import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Heading from "../ui/Heading";
import { useEffect } from "react";

export default function Pagecontainer({children}){
    const location=useLocation();
    const PageName=location.pathname.slice(1,location.pathname.length)
    console.log(PageName)
    const nav=useNavigate()
    useEffect(()=>{
        if(PageName){
            return;
        }
        nav('dashboard')
    },[])
    return (
        <>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col  sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-20 ml-[60px] sm:ml-0">
                <Sidebar></Sidebar>
                
                <div className='flex w-full  flex-col gap-6 sm:gap-8 md:gap-4'>
                
                <p className="text-gray-400 ">Pages<span>/</span><span className="text-black font-medium capitalize">{PageName}</span></p>
                <Heading>{PageName}</Heading>
                <Outlet></Outlet>
                </div>
                
            </div>
        </>
    )
}
