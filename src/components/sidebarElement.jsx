import { Link } from "react-router-dom"
export default function SidebarElement({label,Icon}){
    const togo=label
    return (
        <>
        <Link to={togo} className="flex group duration-300
   hover:bg-gray-50 sm:hover:bg-white p-2 sm:p-4 rounded-xl gap-3 sm:gap-4 items-center transition w-full"
    
   >
        <span className="rounded-xl p-1.5 sm:p-2 bg-white duration-300 group-hover:bg-[#4fd1c5] flex-shrink-0">
        <Icon className="text-[#4fd1c5] duration-300 group-hover:text-white w-[18px] h-[18px] sm:w-5 sm:h-5" size={18}></Icon>
        </span>
            <span className="opacity-0 group-hover/side:opacity-100 translate-x-[-5px] group-hover/side:translate-x-[0] duration-300 text-[#a0aec0] text-xs sm:text-sm whitespace-nowrap">{label}</span>
          
    </Link>
        </>
    )
}