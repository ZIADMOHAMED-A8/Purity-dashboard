import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";
import DashBoardPage from "../pages/DashboardPage";
import Pagecontainer from "../components/pagecontainer";
import PaymentMethod from "../components/PaymentMethod";
import BillingPage from "../pages/BillingPage";
import TablesPage from "../pages/TalesPage";
import LoginPage from "../pages/auth/LoginPage";

export default function DashboardRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Pagecontainer></Pagecontainer>}>
                    <Route path="dashboard" element={<DashBoardPage></DashBoardPage>}></Route>
                    <Route path="billing" element={<BillingPage></BillingPage>}></Route>
                    <Route path="Tables" element={<TablesPage></TablesPage>}></Route>
                </Route>
                <Route path="/sign in" element={<LoginPage></LoginPage>}>

                </Route>


            </Routes>
        </>
    )
}