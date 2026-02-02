import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";
import DashBoardPage from "../pages/DashboardPage";
import Pagecontainer from "../components/pagecontainer";
import PaymentMethod from "../components/PaymentMethod";

export default function DashboardRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Pagecontainer></Pagecontainer>}>
                    <Route path="dashboard" element={<DashBoardPage></DashBoardPage>}></Route>
                    <Route path="billing" element={<PaymentMethod></PaymentMethod>}></Route>

                </Route>


            </Routes>
        </>
    )
}