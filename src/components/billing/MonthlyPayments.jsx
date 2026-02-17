import FeatureCards from "../dashboard/FeautureCards";
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
