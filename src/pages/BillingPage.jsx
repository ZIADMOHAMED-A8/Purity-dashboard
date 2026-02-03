import BillingInfo from "../components/BillingInfo";
import Invoices from "../components/Invoices";
import MonthlyPayments from "../components/MonthlyPayments";
import PaymentMethod from "../components/PaymentMethod";

export default function BillingPage() {
    return (
        <>
            <MonthlyPayments></MonthlyPayments>
            <BillingInfo></BillingInfo>
        </>
    )
}