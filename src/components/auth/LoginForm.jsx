import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules } from "./validationRules"
import Login from "../../Login"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
export default function LoginForm() {
  const { watch, handleSubmit, formState: { errors }, register } = useForm()
  const dispatch = useDispatch()
  const nav = useNavigate()
  const watchedValues = watch()
  console.log(watchedValues)
  const [loginErrors, setErrors] = useState({
    message: null
  })
  useEffect(() => {
    if (loginErrors.message) {
      
      setErrors({ message: null })
      console.log('dss')
    }
  }, [watchedValues.email,watchedValues.password])
 
  async function onSubmit(data) {
    const { data: authData, error } = await Login(data.email, data.password)

    console.log('auth', authData)
    if (authData) {
      nav('/')
      dispatch(setCredentials(authData))
    }
    else {
      const tempError = {
        message: error.message
      }
      setErrors(tempError)
    }

  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="[&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl w-xl [&>div>input]:p-2 flex flex-col gap-8 items-start"
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
      <FormButton className="w-[60%]">
        Sign in
      </FormButton>
    </form>
  )
}
