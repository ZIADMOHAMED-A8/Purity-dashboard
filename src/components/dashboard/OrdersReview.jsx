import Heading from "../ui/Heading";
import {
    Bell,
    FileText,
    ShoppingCart,
    CreditCard,
    PackageOpen,
    Layers
  } from "lucide-react";
import LabeldIcon from "../ui/LabeldIcon";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../api/getDashboardData/getNotifications ";
export default function OrdersReview(){
    const iconsMap = {
        Bell,
        FileText,
        ShoppingCart,
        CreditCard,
        PackageOpen,
        Layers,
      };
    const {data,isLoading}=useQuery({
        queryKey:['notifications '],
        queryFn:getNotifications
    })
    if(isLoading){
        return(
            <p className="flex-2">loading...</p>
        )
    }
    return (
        <>
            <article className="flex-2 rounded-2xl p-4 flex flex-col gap-10  bg-white ">
                <Heading>Orders Review</Heading>
                <div className="flex flex-col gap-8">
                
                    {data.map(e => 
                    {
                        const icon=iconsMap[e.icon_name]
                       return <LabeldIcon key={e.id} Icon={icon} Headear={e.title} body={e.date} ></LabeldIcon>
                    }
                    )}
                </div>      
            </article>
        </>
    )
}
