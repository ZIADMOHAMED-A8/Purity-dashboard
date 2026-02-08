import { useNavigate } from "react-router-dom"
import bg from "../../assets/bg.png"
import verifyOTP from "../../VerifyOTP"
import PublicRoute from "../../components/auth/PublicRoute"
import { useDispatch, useSelector } from "react-redux"
import { removeEmail } from "../../features/auth/registerSlice"
import OTPInput from "react-otp-input"
import { useState,useEffect } from "react"
import FormButton from "../../components/auth/FormButton"

export default function OtpPage() {
  const nav = useNavigate()
  const email = useSelector((state) => state.register.email)
  const [otpErrors,setotpErrors]=useState(null)
  const [otp, setOtp] = useState("")
  async function handleVerify() {
    if (otp.length !== 6) return

    let { data: authData, error } = await verifyOTP(email, otp)
    

    if (authData) {
      nav("/profile")
      console.log("you're registered")
    }
    else if(error){
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

          <img src={bg} alt="" className="w-auto h-auto" />
        </div>
      </div>
  )
}