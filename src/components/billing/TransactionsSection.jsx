import FeatureCards from "../dashboard/FeatureCards";
import BillingInfo from "./BillingInfo";
import Transactions from "./Transactions";

export default function () {
    return (
        <FeatureCards>
            <BillingInfo></BillingInfo>
            <Transactions></Transactions>
        </FeatureCards>
    )
}
