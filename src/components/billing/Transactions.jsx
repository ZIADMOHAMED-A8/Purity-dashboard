import transactionsData from "../../utils/transactionsData";
import DeductedTransaction from "./DecuctionTransaction";
import Heading from "../ui/Heading";
import PendingTransaction from "./PendingTransaction";
import IncomingTransaction from "./IncomingTransaction";
import IncomingMoney from "./IncomingMoney";
import DeductedMoney from "./DeductedMoney";
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
    return (
        <article className="flex-2 bg-white rounded-2xl p-6 flex flex-col gap-6">
            <Heading>Transactions</Heading>
            <div className="flex flex-col gap-6">
                <p className="uppercase text-gray-400 font-semibold items-center">Newest</p>
                {transactionsData.map(e => {
                    const Icon = states_mapping[e.transactionType].icon;
                    const Money = states_mapping[e.transactionType].money;
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
