import { useIsTablet } from "../hooks/isTablet"

export default function DashboardBox({label,Icon,stats='2000'}){
    const isTablet=useIsTablet();
    return (
        <>
            <div className="basis-1/4 flex p-4 justify-between h-1/8 rounded-xl h-fit items-center bg-white ">
            <div>
            <p className="text-gray-600 text-[clamp(11px,1.2vw,14px)] whitespace-nowrap ">{label}</p>
            <p className="font-bold">{stats}</p>
            </div>
            {!isTablet && 
            <div className="bg-[#4fd1c5] p-3 rounded-xl">
            <Icon color={'white'} size={30}></Icon>
            </div>
            
            }
            </div>
        </>
    )
}