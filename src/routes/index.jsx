import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/layout/sidebar";
import DashBoardPage from "../pages/DashboardPage";
import Pagecontainer from "../components/layout/pagecontainer";
import PaymentMethod from "../components/billing/PaymentMethod";
import BillingPage from "../pages/BillingPage";
import TablesPage from "../pages/TalesPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import OtpPage from "../pages/auth/OtpPage";

export default function DashboardRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Pagecontainer></Pagecontainer>}>
                    <Route path="dashboard" element={<DashBoardPage></DashBoardPage>}></Route>
                    <Route path="billing" element={<BillingPage></BillingPage>}></Route>
                    <Route path="Tables" element={<TablesPage></TablesPage>}></Route>
                </Route>
                <Route path="/sign in" element={<LoginPage></LoginPage>}> </Route>
                <Route path="/Sign up" element={<SignupPage />}> </Route>
                <Route path="/Otp" element={<OtpPage/>}> </Route>





            </Routes>
        </>
    )
}