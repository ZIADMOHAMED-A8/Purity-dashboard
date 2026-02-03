export default function IncomingMoney({children}){
    return (
        <span className="text-green-600 font-medium" >{children || <span className="text-black" >Pending</span>}</span>

    )
}