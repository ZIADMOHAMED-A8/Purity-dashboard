import SimpleBarChart from "./Barchart"
import BoxesLayout from "./BoxesLayout"
import Dashboardboxex from "./DashboardBoxes"
import Heading from "./Heading"
import {
    Users,
    MousePointerClick,
    DollarSign,
    Package,
  } from "lucide-react";

  const Icons_mapping=[
     {label:'Users',Icon:Users},
        {label:'Clicks',Icon:MousePointerClick},
        {label:'Sales',Icon:DollarSign},
        {label:'Package',Icon:Package},
    
  ]
export default function Barchartwithboxes(){
    return (
        <div className=' p-4 rounded-2xl flex-2 gap-6 shadow-md flex flex-col'>
        <SimpleBarChart></SimpleBarChart>
        <Heading>Active Users</Heading>
        <BoxesLayout list={ Icons_mapping}></BoxesLayout>
        </div>
    )
}