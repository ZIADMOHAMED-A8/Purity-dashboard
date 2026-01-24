import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";
import DashboardBox from "./DashboardBox";

export default function Dashboardboxex(){
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
    return (
        <>
            <div className="flex w-full  justify-between gap-10 ">
                {Icons_mapping.map(e => 
                    <DashboardBox label={e.label} Icon={e.Icon}></DashboardBox>
                )}


            </div>
        </>
    )
}