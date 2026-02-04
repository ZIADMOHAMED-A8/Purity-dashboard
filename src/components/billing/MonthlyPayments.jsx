import Invoices from "./Invoices";
import PaymentMethod from "./PaymentMethod";

export default function MonthlyPayments(){
    return (
        <div className="flex gap-6  ">
        <PaymentMethod></PaymentMethod>
        <Invoices></Invoices>
        </div>
    )
}
