export default function OtpInputs({ length = 5, register }) {
  return (
    <div className="flex justify-between">
      {Array.from({ length }).map((_, i) => (
        <span
          key={i}
          className="w-[60px] h-[60px] border border-gray-300 flex items-center justify-center rounded-xl"
        >
          <input
            type="number"
            data-index={i}
            maxLength={1}
            min={0}
            max={9}
            className="w-[60px] h-[60px] font-bold text-2xl focus:outline-0 text-center transition-300
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            {...register(`otp.${i}`, {
              required: "please enter the full otp",
            })}
          />
        </span>
      ))}
    </div>
  )
}

