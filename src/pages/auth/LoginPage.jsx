import shakra from '../../assets/chakra.png'
import LoginForm from '../../components/auth/LoginForm'
import PublicRoute from '../../components/auth/PublicRoute'

export default function LoginPage() {
    return (
        <>
            <PublicRoute>
                <div className='flex flex-row-reverse justify-between  pl-[15%] '>
                    <img src={shakra} alt="" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold text-[#4fd1c5] pb-2'>Welcome back</h1>
                        <p className='text-gray-400'>Enter your password and email to sign in</p>
                        <LoginForm></LoginForm>

                    </div>

                </div>
            </PublicRoute>
        </>
    )
}