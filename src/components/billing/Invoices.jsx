import { useQuery } from "@tanstack/react-query"
import toCurrencyConverter from "../../utils/CurrnecyAdder"
import Heading from "../ui/Heading"
import { getInvoices } from "../../api/getDashboardData/getInvoices"

export default function Invoices() {
    const {data,isLoading}=useQuery({
        queryKey:['invoices'],
        queryFn:getInvoices
    })
    if(isLoading){
        return (
            <p className="flex-2">Loading...</p>
        )
    }
    return (
        <article className='flex-2 flex gap-8 flex-col bg-white p-4 rounded-2xl'>
            <Heading>Invoices</Heading>
            {data.map((e) =>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-medium">
                            {e.date}
                        </div>
                        <div className="text-gray-400 font-medium">
                            {e.id}
                        </div>
                    </div>
                    <div className="text-gray-400 font-medium">{toCurrencyConverter(e.amount)}</div>
                </div>
            )}

        </article>
    )
}
