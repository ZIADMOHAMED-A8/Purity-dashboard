import { useIsTablet } from "../hooks/isTablet"

export default function DashboardBox({label,Icon,stats='2000'}){
    const isTablet=useIsTablet();
    return (
        <>
            <div className="flex-1 min-w-[140px] sm:min-w-[160px] md:basis-1/4 flex p-3 sm:p-4 justify-between rounded-xl h-fit items-center bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-xs sm:text-sm md:text-[clamp(11px,1.2vw,14px)] whitespace-nowrap truncate">{label}</p>
            <p className="font-bold text-base sm:text-lg md:text-xl">{stats}</p>
            </div>
            {!isTablet && 
            <div className="bg-[#4fd1c5] p-2 sm:p-3 rounded-xl flex-shrink-0 ml-2">
            <Icon color={'white'} size={24} className="sm:w-[30px] sm:h-[30px]"></Icon>
            </div>
            
            }
            </div>
        </>
    )
}