export default function SidebarElement({label,Icon}){
    return (
        <>
        <button className="flex group   duration-300
   hover:bg-white p-4 rounded-xl gap-4 items-center gap-5 transition">
        <span className="rounded-xl p-2 bg-white  duration-300 group-hover:bg-[#4fd1c5]">
        <Icon  className={'text-[#4fd1c5] duration-300 group-hover:text-white'}  size={20}></Icon>
        </span>
            <span>{label}</span>
          
    </button>
        </>
    )
}