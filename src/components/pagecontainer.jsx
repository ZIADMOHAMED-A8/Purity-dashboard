export default function Pagecontainer({children}){
    return (
        <>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-20 ml-[60px] sm:ml-0">
                {children}
            </div>
        </>
    )
}