import toCurrencyConverter from "../../utils/CurrnecyAdder"
import invoicesdata from "../../utils/invoicesdata"
import Heading from "../ui/Heading"

export default function Invoices() {
    return (
        <article className='flex-2 flex gap-8 flex-col bg-white p-4 rounded-2xl'>
            <Heading>Invoices</Heading>
            {invoicesdata.map((e) =>
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
