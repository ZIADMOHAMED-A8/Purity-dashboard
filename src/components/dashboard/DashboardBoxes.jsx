import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";
import DashboardBox from "./DashboardBox";
import BoxesLayout from "./BoxesLayout";
const Icons_mapping=[
    {label:"Today\'s money",
    Icon:Wallet},
    {label:"Today\'s Users",
    Icon:Globe},
    {label:'New clients',
    Icon:FileText},
   { label:'Total sales',
Icon:ShoppingCart},
]
export default function Dashboardboxex(){

    return (
        <>
            <BoxesLayout list={Icons_mapping}></BoxesLayout>
        </>
    )
}
