import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function PaymentMethod() {
    return (
        <div class="flex flex-col sm:flex-row items-stretch h-fit gap-4 sm:gap-6">
            <article className='flex-3 flex gap-10 flex-col bg-white'>
                <div className='flex'>
                    <div className='flex-2'><Cards
                        number={3}
                        expiry={1}
                        cvc={444}
                        name={'zoad'}
                    ></Cards></div>
                    <p className='flex-1'>card</p>
                    <p className='flex-1'>card</p>

                </div>
                <div>placeholder1</div>

            </article>
            {/* <article className='flex-2 flex gap-10 flex-col bg-white'>
                <div>placeholder1</div>
                <div>placeholder1</div>

            </article> */}
        </div>
    )
}