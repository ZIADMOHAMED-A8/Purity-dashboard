import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/layout/sidebar";
import DashBoardPage from "../pages/DashboardPage";
import Pagecontainer from "../components/layout/PageContainer";
import PaymentMethod from "../components/billing/PaymentMethod";
import BillingPage from "../pages/BillingPage";
import TablesPage from "../pages/TalesPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import OtpPage from "../pages/auth/OtpPage";
import ProfileBanner from "../components/profile/ProfileBanner";
import { useSelector } from "react-redux";
import ShowUsers from "../pages/ShowUsers";
import Editdata from "../pages/Editdata";
import AdminRoute from "./AdminRoute";
import ProfilePage from "../pages/ProfilePage";

export default function DashboardRoutes() {
    const email = useSelector(state => state.register.email)
    return (
        <>
            <Routes>
                <Route path='/' element={<Pagecontainer></Pagecontainer>}>
                    <Route path="dashboard" element={<DashBoardPage></DashBoardPage>}></Route>
                    <Route path="billing" element={<BillingPage></BillingPage>}></Route>
                    <Route path="Tables" element={<TablesPage></TablesPage>}></Route>
                    <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
                    <Route path="showusers" element={<ShowUsers></ShowUsers>}></Route>
                    <Route path="edit" element={<AdminRoute><Editdata></Editdata></AdminRoute>}></Route>


                </Route>
                <Route path="/sign in" element={<LoginPage></LoginPage>}> </Route>
                <Route path="/Sign up" element={<SignupPage />}> </Route>
                <Route
                    path="/otp"
                    element={
                        email ? <OtpPage /> : <Navigate to="/sign up" />
                    }
                />





            </Routes>
        </>
    )
}
