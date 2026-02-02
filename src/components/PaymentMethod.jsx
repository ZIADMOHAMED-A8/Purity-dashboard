import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Wallet } from 'lucide-react';
import PaymentCard from './PaymentCard';
import Heading from './Heading';
import AddingCardForm from './AddingCardForm';
import { useForm } from "react-hook-form";
import { toexpiry } from '../utils/toexpirydate';

export default function PaymentMethod() {
    const { watch, register, handleSubmit, formState: { errors }, reset } = useForm();
    function onSubmit(data) {
        // to send to an api endpoint 
        reset()
    }
    return (
        <div className="flex flex-col sm:flex-row items-stretch h-fit gap-4 sm:gap-6">
            <article className='flex-3 flex gap-10 flex-col '>
                <div className='flex  gap-10 items-center'>
                    <div className='flex-2'><Cards
                        number={watch("CardNumber")}
                        expiry={toexpiry(watch('Expiry'))}
                        cvc={watch('CVV')}
                        name={'Ziad'}
                    ></Cards></div>
                    <p className='flex-1'><PaymentCard Icon={Wallet} label={'Salary'} amount={'+$2000'} desc={'Belong interactive'}></PaymentCard></p>
                    <p className='flex-1'><PaymentCard Icon={Wallet} label={'Paypal'} amount={'+$2000'} desc={'Freelancing Income'}></PaymentCard></p>


                </div>
                <article className='bg-white w-full p-4 rounded-2xl'>
                    <div className='flex justify-between items-center mb-4'>
                        <Heading>Payment method</Heading>
                        <button form='payment-form' className='bg-linear-to-r from-[#2f345a] to-[#0f1326] p-4 rounded-2xl text-white uppercase font-medium cursor-pointer'>Add a new card</button>
                    </div>
                    <AddingCardForm register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        onSubmit={onSubmit}></AddingCardForm>
                </article>

            </article>
            <article className='flex-2 flex gap-10 flex-col bg-white'>
                <div>placeholder1</div>
                <div>placeholder1</div>

            </article>
        </div>
    )
}