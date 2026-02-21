import FeatureCards from "../dashboard/FeatureCards";
import Invoices from "./Invoices";
import PaymentMethod from "./PaymentMethod";

export default function MonthlyPayments(){
    return (
        <FeatureCards>
        <PaymentMethod></PaymentMethod>
        <Invoices></Invoices>
        </FeatureCards>
    )
}
