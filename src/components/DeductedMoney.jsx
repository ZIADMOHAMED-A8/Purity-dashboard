export default function DeductedMoney({children}){
    return (
        <span className="text-red-400 font-bold" >{children || 'Pending'}</span>
    )
}