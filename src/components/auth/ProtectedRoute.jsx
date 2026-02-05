import { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/getUser";

export default function ProtectedRoute({ children }) {
    const isAuth = useSelector((state) => state.auth.isAuthednticated)
    const nav = useNavigate()


    return (
        <>{children}</>
    )
}