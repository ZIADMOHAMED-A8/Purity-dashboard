import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules, nameRules } from "./validationRules"
import Signup from "../../../SignUp"
import { useNavigate } from "react-router-dom"
export default function Signupform() {
  const { handleSubmit, formState: { errors }, register } = useForm()
  const nav = useNavigate()
  async function onSubmit(data) {
    let authData = await Signup(data.email, data.password)
    if (authData.user) {
      console.log('tmm')
      sessionStorage.setItem('email', email)
      nav('/Otp')
    }
    else {
      console.log(authData)
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
      <FormButton className="w-full">Sign Up</FormButton>
    </form>
  )
}
