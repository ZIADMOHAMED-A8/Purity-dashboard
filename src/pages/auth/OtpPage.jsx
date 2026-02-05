import { useNavigate } from "react-router-dom"
import bg from "../../assets/bg.png"
import OtpForm from "../../components/auth/OtpForm"
import verifyOTP from "../../VerifyOTP"
import { useEffect } from "react"
import PublicRoute from "../../components/auth/PublicRoute"

export default function OtpPage() {
    const nav=useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem('email')){nav('/sign up')}
    })
    async function handleOtpSubmit(data) {
    const otp=data.otp.reduce((acc,current)=>acc+current)
    const {authData}=await verifyOTP(otp)
    console.log(authData)
  }

  return (
    <PublicRoute>
    <div className="py-6">
      <div className="flex relative justify-center items-center">
        <div className="absolute left-[50%] top-[20%] -translate-x-[50%] flex flex-col gap-16 text-center text-white">
          <div>
            <p className="text-3xl capitalize font-bold text-center">
              Please enter the OTP sent to your E-mail
            </p>
          </div>

          <OtpForm length={6} onSubmit={handleOtpSubmit} />
        </div>

        <img src={bg} alt="" />
      </div>
    </div>
    </PublicRoute>
  )
}