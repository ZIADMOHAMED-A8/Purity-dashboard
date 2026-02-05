import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function PublicRoute({children}){
    const isAuth = useSelector((state) => state.auth.isAuthednticated)
    const nav=useNavigate()
    useEffect(()=>{
        if(isAuth){
            nav('/dashboard')
        }
    },[])
    
    
    return (
        <>
        {children}
        </>
    )
}