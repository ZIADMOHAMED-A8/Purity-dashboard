import Heading from "./Heading";

import IconWithanUnderline from "./IconWithanUnderline";
import ActivitiesData from "../utils/ActivitiesData";
import LabeldIcon from "./LabeldIcon";
export default function OrdersReview(){
    return (
        <>
            <article className="flex-[2] rounded-2xl p-4 flex flex-col gap-10  bg-white ">
                <Heading>Orders Review</Heading>
                <div className="flex flex-col gap-8">
                
                    {ActivitiesData.map(e => 
                        <LabeldIcon key={e.id} Icon={e.icon} Headear={e.title} body={e.date} ></LabeldIcon>
                    )}
                </div>      
            </article>
        </>
    )
}