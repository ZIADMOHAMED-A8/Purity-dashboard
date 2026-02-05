import bg from '../../assets/bg.png'
import PublicRoute from '../../components/auth/PublicRoute'
import Signupform from '../../components/auth/Signupform'

export default function SignupPage() {
    return (
        <>
        <PublicRoute>
            <div className="py-6">
                <div className='flex relative justify-center items-center'>
                    <div className='absolute left-[50%] top-[20%] -translate-x-[50%] w- flex flex-col gap-16 text-center  text-white'>
                        <div>
                            <p className='text-3xl capitalize font-bold text-center  '>welcome!</p>
                            <p>Use these awesome forms to login or create new </p>
                            <p>account in your project for free.</p>
                        </div>
                        <div className='bg-white text-black rounded-2xl p-12'>
                            <h1 className='font-semibold text-2xl'>Register</h1>
                           <Signupform></Signupform>
                        </div>

                    </div>
                    <img src={bg} alt="" />
                </div>
            </div>
            </PublicRoute>
        </>
    )
}