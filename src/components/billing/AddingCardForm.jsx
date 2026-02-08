export default function AddingCardForm({ errors, handleSubmit, register, onSubmit }) {
  return (
      <>
        <form
          id="payment-form"
          onSubmit={handleSubmit(onSubmit)}
          className="[&>div>input]:border-1 gap-6 [&>div>input]:rounded-2xl [&>div>input]:p-2 flex flex-col [&>div>input]:h-15 flex-wrap [&>div>input]:border-gray-400
          [&>div>div>input]:border-1  [&>div>div>input]:rounded-2xl [&>div>div>input]:p-2  [&>div>div>input]:h-15  [&>div>div>input]:border-gray-400
          "
        >
          <div className="relative">
            <input
            type="number"
              className="w-full"
              placeholder="Card Number"
              {...register("CardNumber", {
                required: "Card number is required",
                pattern: {
                  value:
                    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|2[2-7][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13})$/,
                  message: "Invalid Card Number",
                },
              })}
            />
            {errors.CardNumber && (
              <span className="absolute -bottom-5 left-0 text-sm text-red-500">
                {errors.CardNumber.message}
              </span>
            )}
          </div>
  
          <div className="flex gap-6">
            <div className="relative w-1/2">
              <input
                className="w-full"
                type="number"
                placeholder="CVV"
                {...register("CVV", {
                  required: "CVV is required",
                  minLength: {
                    value: 3,
                    message: "CVV is 3 digits",
                  },
                  maxLength: {
                    value: 3,
                    message: "CVV is 3 digits",
                  },
                })}
              />
              {errors.CVV && (
                <span className="absolute -bottom-5 left-0 text-sm text-red-500">
                  {errors.CVV.message}
                </span>
              )}
            </div>
  
            {/* Expiry */}
            <div className="relative w-1/2">
              <input
              
                className="w-full"
                type="date"
                placeholder="Expiry"
                min={new Date().toISOString().split("T")[0]}
                {...register("Expiry", {
                  required: "Expiry is required",
                  min:{
                    value:new Date().toISOString().split("T")[0],
                    message:'Expiry date is invalid'
                  }
                })}
              />
              {errors.Expiry && (
                <span className="absolute -bottom-5 left-0 text-sm text-red-500">
                  {errors.Expiry.message}
                </span>
              )}
            </div>
          </div>
        </form>
      </>
    );
  }
