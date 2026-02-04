import BillingInfo from "./BillingInfo";
import Transactions from "./Transactions";

export default function () {
    return (
        <div className="flex gap-6 ">
            <BillingInfo></BillingInfo>
            <Transactions></Transactions>
        </div>
    )
}