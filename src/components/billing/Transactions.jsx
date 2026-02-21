import DeductedTransaction from "./DeductionTransaction";
import Heading from "../ui/Heading";
import PendingTransaction from "./PendingTransaction";
import IncomingTransaction from "./IncomingTransaction";
import IncomingMoney from "./IncomingMoney";
import DeductedMoney from "./DeductedMoney";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../api/getDashboardData/getTransactions";
import Skeleton from "react-loading-skeleton";
const states_mapping = {
    pending: {
        icon: PendingTransaction,
        money: IncomingMoney,
    },
    expense: {
        icon: DeductedTransaction,
        money: DeductedMoney,
    },
    income: {
        icon: IncomingTransaction,
        money: IncomingMoney,
    },
};

export default function Transactions() {
    const {data,isLoading}=useQuery({
        queryKey:['transactions'],
        queryFn:getTransactions
    })
    if(isLoading){
        return (
            <article className="flex-2 bg-white rounded-2xl p-6 flex flex-col gap-6">
                <Skeleton height={28} width={140} />
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Skeleton key={`transactions-skeleton-${idx}`} height={44} />
                ))}
            </article>
        )
    }
    else{
    return (
        <article className="flex-2 bg-white rounded-2xl p-6 flex flex-col gap-6">
            <Heading>Transactions</Heading>
            <div className="flex flex-col gap-6">
                <p className="uppercase text-gray-400 font-semibold items-center">Newest</p>
                {data.map(e => {
                    const Icon = states_mapping[e.transaction_type].icon;
                    const Money = states_mapping[e.transaction_type].money;
                    return (
                        <div className="justify-between flex">
                            <div className="flex gap-6 items-center">
                                {<Icon></Icon>}
                                <div>
                                    <p className="font-bold">{e.company}</p>
                                    <p className="text-gray-400 font-medium">{e.date}, at {e.time}</p>
                                </div>
                            </div>
                            {<Money>{e.amount}</Money>}
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
}
