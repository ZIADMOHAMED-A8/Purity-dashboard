import BillingInfo from "../components/BillingInfo";
import MonthlyPayments from "../components/MonthlyPayments";
import TransactionsSection from "../components/TransactionsSection";

export default function BillingPage() {
    return (
        <>
            <MonthlyPayments></MonthlyPayments>
            <TransactionsSection></TransactionsSection>
        </>
    )
}