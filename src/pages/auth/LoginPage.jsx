import shakra from '../../assets/chakra.png'
import LoginForm from '../../components/auth/LoginForm'
import PublicRoute from '../../components/auth/PublicRoute'
import useBreakpoints from '../../hooks/useBreakpoints'

export default function LoginPage() {
    const { isDesktop } = useBreakpoints()
    return (
        <>
            <PublicRoute>
                <div className={isDesktop ? 'flex flex-row-reverse justify-between  pl-[15%] ' : 'flex justify-center items-center '}>
                    {isDesktop &&
                        <div className='aspect-square'>
                            <img src={shakra} className='max-w-full h-screen object-fill ' alt="" />
                        </div>
                    }
                    <div className={isDesktop ? 'flex flex-col justify-center h-screen' : 'flex flex-col justify-center h-screen items-center' }>
                        <h1 className='text-3xl font-bold text-[#4fd1c5] pb-2'>Welcome back</h1>
                        <p className='text-gray-400'>Enter your password and email to sign in</p>
                        <LoginForm className={isDesktop ? "[&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl w-xl [&>div>input]:p-2 flex flex-col gap-8  items-start" :
                            "[&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl w-xl [&>div>input]:p-2 flex flex-col gap-8  items-center"
                        }></LoginForm>

                    </div>

                </div>
            </PublicRoute>
        </>
    )
}