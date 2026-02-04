import { useForm } from "react-hook-form"

export default function LoginForm() {
const {handleSubmit,formState:{errors},register}=useForm()
    function onSubmit(data){
        console.log(data)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="[&>div>input]:border-1 [&>div>input]:border-gray-300 w-xl [&>div>input]:rounded-xl [&>div>input]:p-2 flex flex-col gap-8">
            <div className="flex flex-col gap-2 w-[60%]">
                <label htmlFor="email" className="pt-8 " >Email</label>
                <input type="email" {...register("email",
                    {
                        required:'email is required'
                    }
                )} className=" focus:outline-0  focus:ring-0 w-full" ></input>
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col gap-2 w-[60%]" >
                <label htmlFor="Password" >Password</label>
                <input type="password" 
                {...register('password',
                    {
                        required:'Password is required',
                        minLength:{
                            value:8,
                            message:'Password is at least 8 values'
                        },
                        pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                            message:
                              "Password must contain uppercase, lowercase, number and special character"
                          }
                    }
                )}
                
                className=" focus:outline-0 focus:ring-0"></input>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            <button className="bg-[#4fd1c5] p-4 rounded-2xl text-white cursor-pointer w-[60%] uppercase">Sign in</button>

        </form>
    )
}