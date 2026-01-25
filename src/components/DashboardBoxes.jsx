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
            <div className="flex w-full flex-wrap justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {Icons_mapping.map((e, index) => 
                    <DashboardBox key={index} label={e.label} Icon={e.Icon}></DashboardBox>
                )}


            </div>
        </>
    )
}