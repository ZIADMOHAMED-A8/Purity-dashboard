import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Wallet  } from 'lucide-react';
import PaymentCard from './PaymentCard';
export default function PaymentMethod() {
    return (
        <div class="flex flex-col sm:flex-row items-stretch h-fit gap-4 sm:gap-6">
            <article className='flex-3 flex gap-10 flex-col '>
                <div className='flex  gap-10'>
                    <div className='flex-2'><Cards
                        number={444494649749546}
                        expiry={1}
                        cvc={444}
                        name={'zoad'}
                        
                    ></Cards></div>
                    <p className='flex-1'><PaymentCard Icon={Wallet} label={'Salary'} amount={'+$2000'} desc={'Belong interactive'}></PaymentCard></p>
                    <p className='flex-1'><PaymentCard Icon={Wallet} label={'Paypal'} amount={'+$2000'} desc={'Freelancing Income'}></PaymentCard></p>


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