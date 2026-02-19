import bg from '../../assets/bg.png'
import Avatar from '../../assets/avatar.png'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../utils/getUser'
import { Pen } from 'lucide-react'
import { supabase } from '../../../supabaseClient'
import { handleUpload } from './helpers/handleUpload'
import useUploadPic from './helpers/useUploadpic'
export default function ProfileBanner() {
    const { data, isLoading } = useQuery({
        queryKey: ['getUser'],
        queryFn: getUser
    })
    const {mutateAsync}=useUploadPic();
 
        
    if (isLoading) {
        return <><Skeleton height={24} width={160} /></>;
    }
    else {
        const userData = data?.data?.user?.user_metadata
        return (
            <>
                <article>
                    <div className='relative '>
                        <img src={bg} alt="" />
                        <div className='absolute bottom-[-20px] left-[50%] -translate-x-[50%] w-[calc(100%-2rem)]          bg-white/60 backdrop-blur-xl
         shadow-[0_8px_30px_rgba(0,0,0,0.12)]
         border border-white/30  rounded-2xl p-4  '>
                            <div>
                                <div className='flex gap-6 items-center'>
                                    <div className='bg-linear-to-r relative from-[#2f345a] to-[#0f1326] rounded-2xl  w-[64px] h-[64px] '>
                                        <img src={userData.avatar_url || Avatar} className='w-[64px] h-[64px] rounded-2xl'></img>
                                            <input type='file' accept='image/*' onChange={async(e)=>{
                                                  const file = e.target.files?.[0]
                                                  if (!file) return
                                                await mutateAsync({file,data})
                                            }} id="uploadphoto" className='hidden '></input>
                                            <label className=' p-2 rounded-xl bg-white absolute -bottom-2 left-[46px]' htmlFor="uploadphoto">
                                                <Pen size={16} color={'#4fd1c5'}></Pen>
                                            </label>
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl capitalize'>{userData?.role === 'admin'
                                            ? (`Admin ${userData?.first_name}`)
                                            : userData?.first_name}</h1>
                                        <p className='text-gray-400 -mt-1 text-sm'>{data?.data?.user.email}</p>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}