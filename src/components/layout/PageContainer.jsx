import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Heading from "../ui/Heading";
import { useEffect } from "react";
import ProtectedRoute from "../auth/ProtectedRoute";

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
        <ProtectedRoute>
            <div className="  pl-0 pt-0 flex flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-10  ">
                <Sidebar></Sidebar>
                
                <div className='flex w-full  px-2 sm:px-4 pt-8 lg:px-4 md:px-4 flex-col gap-6 sm:gap-8 md:gap-4'>
                
                <p className="text-gray-400 ">Pages<span>/</span><span className="text-black font-medium capitalize">{PageName}</span></p>
                <Heading>{PageName}</Heading>
                {PageName ? <Outlet></Outlet> :<Navigate to='/dashboard'></Navigate>}

                </div>
                
            </div>
            </ProtectedRoute>
    )
}
