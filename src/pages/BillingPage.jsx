import ProtectedRoute from "../components/auth/ProtectedRoute";
import BillingInfo from "../components/billing/BillingInfo";
import MonthlyPayments from "../components/billing/MonthlyPayments";
import TransactionsSection from "../components/billing/TransactionsSection";

export default function BillingPage() {
    return (
        <>
                <MonthlyPayments></MonthlyPayments>
                <TransactionsSection></TransactionsSection>
        </>
    )
}