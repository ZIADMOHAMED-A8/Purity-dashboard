import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules, nameRules } from "./validationRules"
import Signup from "../../api/auth/SignUp"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

export default function SignupForm() {
  const { handleSubmit, formState: { errors }, register } = useForm()
  const {mutateAsync,isPending}=useMutation({
    mutationFn:Signup
  })
  const [signupErrors, setsignupErrors] = useState([])
  const nav = useNavigate()
  async function onSubmit({ email, password, Name }) {
    let {data:authData,error} = await mutateAsync({email, password, name:Name})
    if (authData?.user) {
      sessionStorage.setItem('email',email)
      nav('/Otp')
    }
    else {  
      console.log
      setsignupErrors([

        {message:error.message}
      ])
    }

  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="[&>div>input]:border [&>div>input]:border-gray-200 [&>div>input]:rounded-xl [&>div>input]:p-2 flex items-center flex-col gap-8"
    >
      <FormField
        label="Name"
        id="name"
        type="text"
        register={register}
        name="Name"
        rules={nameRules}
        error={errors.Name}
        labelClassName="text-start"
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        register={register}
        name="email"
        rules={emailRules}
        error={errors.email}
        labelClassName="text-start"
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        register={register}
        name="password"
        rules={passwordRules}
        error={errors.password}
        labelClassName="text-start"
      />
      <FormButton disabled={isPending} className={isPending ? "w-full bg-gray-500 hover:bg-gray-500" : "w-full"} >Sign Up</FormButton>
 {signupErrors[0]?.message &&
         <div className="text-red-400">
         {signupErrors[0].message}
       </div>
 }
    </form>
  )
}
