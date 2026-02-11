import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function AdminRoute({children}){
    const isAdmin=useSelector(state =>state.auth.isAdmin)
    if(!isAdmin){
        return (
            <>
            <Navigate  to={'/dashboard'} replace></Navigate>
            </>
        )
    }
    return (
        <>
    {children}    
    </>
    )
}