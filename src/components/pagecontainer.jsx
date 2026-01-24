export default function Pagecontainer({children}){
    return (
        <>
            <div className="p-8 flex gap-10">
                {children}
            </div>
        </>
    )
}