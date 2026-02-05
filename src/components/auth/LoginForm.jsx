import { useForm } from "react-hook-form"
import FormField from "./FormField"
import FormButton from "./FormButton"
import { emailRules, passwordRules } from "./validationRules"
import Login from "../../Login"
export default function LoginForm() {
  const { handleSubmit, formState: { errors }, register } = useForm()

  async function onSubmit(data) {
    console.log(data.email)
    let {data:authData,error}=await Login(data.email,data.password)
    if(authData){
      nav('/')
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
