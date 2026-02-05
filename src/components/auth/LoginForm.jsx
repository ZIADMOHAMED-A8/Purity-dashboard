import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules } from "./validationRules"
import Login from "../../Login"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../features/auth/authSlice"
export default function LoginForm() {
  const { handleSubmit, formState: { errors }, register } = useForm()
  const dispatch=useDispatch()
  async function onSubmit(data) {
    let {data:authData,error}=await Login(data.email,data.password)
    console.log('auth',authData)
    if(authData){
      console.log('etbdnt')
      nav('/')
      dispatch(setCredentials(authData))
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
      <FormButton className="w-[60%]">
        Sign in
      </FormButton>
    </form>
  )
}
