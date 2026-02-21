import { useNavigate } from "react-router-dom"
import bg from "../../assets/bg.png"

import OTPInput from "react-otp-input"
import { useState, useEffect } from "react"
import FormButton from "../../components/auth/FormButton"

import {  useMutation } from "@tanstack/react-query"
import verifyOTP from "../../api/auth/VerifyOTP"
import { queryClient } from "../../main"

export default function OtpPage() {
  
  const nav = useNavigate()
  const {mutateAsync}=useMutation({
    mutationFn:verifyOTP
  })
  const email = sessionStorage.getItem('email')
  const [otpErrors, setotpErrors] = useState(null)
  const [otp, setOtp] = useState("")
  useEffect(()=>{
    if(!email)
    {
      window.location.href='/sign up'
    }
    return ()=>{
      localStorage.removeItem("email")
    }
  })
  async function handleVerify() {
    if (otp.length !== 6) return

    let { data: authData, error } = await mutateAsync({email, otp})


    if (authData?.user) {
      queryClient.setQueryData(['getUser'], authData)


      nav("/profile")
    }
    else if (error) {
      setotpErrors(error)
    }
  }

  return (
    <div className="py-6">
      <div className="relative flex justify-center">
        <div className="absolute left-[50%] top-[20%] -translate-x-[50%] flex flex-col gap-10 text-center text-white z-10">
          <p className="text-3xl font-bold">
            Please enter the OTP sent to {email}
          </p>

          <OTPInput
            value={otp}
            onChange={(value) => {
              setOtp((prev) => {
                if (prev !== value && otpErrors) {
                  setotpErrors(null)
                }
                return value
              })
            }}

            numInputs={6}
            inputType="tel"
            shouldAutoFocus
            containerStyle="flex gap-3 justify-center"
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: '3rem',
                  height: '3rem',
                }}
                className="
                    text-2xl font-bold text-center
                    bg-transparent
                    text-white
                    border-2 border-white
                    rounded-2xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:border-white
                    transition-all duration-300
                    [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none
                  "
              />
            )}
          />

          <FormButton
            onClick={handleVerify}
            disabled={otp.length !== 6}
          >
            Verify
          </FormButton>
          {otpErrors && <div className="text-red-400">{otpErrors.message}</div>}
        </div>

        <img src={bg} alt="" className="w-auto min-h-[350px] h-auto" />
      </div>
    </div>
  )
}
