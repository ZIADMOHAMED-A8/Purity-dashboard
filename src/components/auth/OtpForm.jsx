import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import handleKeyDown from "../../utils/HandlekeydownOtp"
import FormButton from "./FormButton"
import OtpInputs from "./OtpInputs"

export default function OtpForm({ length = 5, onSubmit }) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()

  const contRef = useRef(null)

  useEffect(() => {
    contRef.current?.querySelector("input")?.focus()
  }, [])

  useEffect(() => {
    const listener = (e) => handleKeyDown(e, contRef)
    window.addEventListener("onChange", listener)

    return () => {
      window.removeEventListener("onChange", listener)
    }
  }, [])

  function handleFormSubmit(data) {
    if (onSubmit) {
      onSubmit(data)
    }
  }

  const hasOtpError = Boolean(errors.otp)

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white flex text-black flex-col gap-10 justify-between rounded-2xl p-12"
      ref={contRef}
    >
      <OtpInputs length={length} register={register} />

      {hasOtpError && (
        <div className="text-red-400 text-sm">Please enter the full OTP</div>
      )}

      <FormButton>Submit</FormButton>
    </form>
  )
}

