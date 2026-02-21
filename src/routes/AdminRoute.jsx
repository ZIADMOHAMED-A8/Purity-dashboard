import { useQuery } from "@tanstack/react-query"
import { Navigate } from "react-router-dom"
import { getUser } from "../utils/getUser"

export default function AdminRoute({ children }) {
    const { data, isLoading } = useQuery({
        queryKey: ['getUser'],
        queryFn: getUser
    })
    if (data?.data?.user?.user_metadata?.role === 'admin') {

        return (
            <>

                {children}
            </>

        )
    }
    return (
        <>
            <Navigate to={'/dashboard'} replace></Navigate>
        </>
    )
}
