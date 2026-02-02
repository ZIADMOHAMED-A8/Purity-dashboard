import Invoices from "../components/Invoices";
import PaymentMethod from "../components/PaymentMethod";

export default function BillingPage() {
    return (
        <div className="flex flex-col sm:flex-row items-stretch h-fit gap-4 sm:gap-6">
            <PaymentMethod></PaymentMethod>
            <Invoices></Invoices>
        </div>
    )
}