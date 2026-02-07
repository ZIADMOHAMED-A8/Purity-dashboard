import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules, nameRules } from "./validationRules"
import Signup from "../../../SignUp"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addEmail } from "../../features/auth/registerSlice"

export default function Signupform() {
  const { handleSubmit, formState: { errors }, register } = useForm()
  const dispatch = useDispatch()
  const nav = useNavigate()
  async function onSubmit({ email, password,Name }) {
    let authData = await Signup(email, password,Name)
    if (authData) {
      console.log('tmm')
      dispatch(addEmail({
        email
      }))
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
