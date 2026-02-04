export default function IconWithanUnderline({Icon}) {
    return(
        <>
            <div className="relative">
                <Icon className="text-[#4fd1c5]"></Icon>
                <span className="w-[3px] absolute left-[50%] -translate-x-1/2 my-1  h-10 bg-gray-200 block"></span>
            </div>

        </>
    )
}
