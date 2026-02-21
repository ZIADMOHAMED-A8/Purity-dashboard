import { Link } from 'react-router-dom'
import bg from '../../assets/bg.png'
import PublicRoute from '../../components/auth/PublicRoute'
import SignupForm from '../../components/auth/Signupform'

export default function SignupPage() {
    return (
        <>
            <PublicRoute>
                <div >
                    <div className='relative flex justify-center items-center'>
                        <div className='absolute inset-0 flex justify-center pt-14 sm:pt-16 md:pt-20 px-4'>
                            <div className='w-full max-w-xl flex flex-col gap-8 sm:gap-12 md:gap-16 text-center text-white'>
                                <div>
                                    <p className='text-2xl sm:text-3xl capitalize font-bold text-center'>welcome!</p>
                                    <p>Use these awesome forms to login or create new </p>
                                    <p>account in your project for free.</p>
                                </div>
                                <div className='bg-white text-black rounded-2xl p-6 sm:p-10 md:p-12 w-full'>
                                    <h1 className='font-semibold text-2xl'>Register</h1>
                                    <SignupForm></SignupForm>
                                    <p className='my-2'>Already have an account? <Link className='text-[#4fd1c5]' to='/sign in'>Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img src={bg} className='w-full  min-h-screen object-cover' alt="" />
                        </div>
                    </div>
                </div>
            </PublicRoute>
        </>
    )
}
