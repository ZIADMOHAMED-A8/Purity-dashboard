import bg from "../../assets/bg.png"
import OtpForm from "../../components/auth/OtpForm"

export default function OtpPage() {
  function handleOtpSubmit(data) {
    // to hit an endpoint
    console.log("OTP submitted", data)
  }

  return (
    <div className="py-6">
      <div className="flex relative justify-center items-center">
        <div className="absolute left-[50%] top-[20%] -translate-x-[50%] flex flex-col gap-16 text-center text-white">
          <div>
            <p className="text-3xl capitalize font-bold text-center">
              Please enter the OTP sent to your E-mail
            </p>
          </div>

          <OtpForm length={5} onSubmit={handleOtpSubmit} />
        </div>

        <img src={bg} alt="" />
      </div>
    </div>
  )
}