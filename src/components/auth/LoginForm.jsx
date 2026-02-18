import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules } from "./validationRules"
import Login from "../../api/auth/Login"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../main"

export default function LoginForm({...props}) {
  const { watch, handleSubmit, formState: { errors }, register } = useForm()
  const { mutateAsync,isPending  } = useMutation({
    mutationFn:Login
  })
  const nav = useNavigate()
  const watchedValues = watch()
  const [loginErrors, setErrors] = useState({
    message: null
  })
  useEffect(() => {
    if (loginErrors.message) {
  
      setErrors({ message: null })
    }
  }, [watchedValues.email,watchedValues.password])
 
  async function onSubmit({email,password}) {
    const {data:authData,error}=await mutateAsync({email,password})
    if (authData?.user) {
      queryClient.setQueryData(['getUser'],authData)
      nav('/')
    }
    else {
      console.log(error)
      const tempError = {
        message: error.message
      }
      setErrors(tempError)
    }

  }

  return (
    <form
    {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        label="Email"
        id="email"
        type="email"
        register={register}
        name="email"
        rules={emailRules}
        error={errors.email}
        className="flex flex-col gap-2 w-[60%]"
        labelClassName="pt-8"
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        register={register}
        name="password"
        rules={passwordRules}
        error={errors.password}
        className="flex flex-col gap-2 w-[60%]"
      />
      {loginErrors?.message &&
        <div className="text-red-400">
          {loginErrors?.message}
        </div>
      }
      <FormButton disabled={isPending} className={isPending ? "w-[60%] bg-gray-500 hover:bg-gray-500" : "w-[60%]"}  >
        Sign in
      </FormButton>
    </form>
  )
}
