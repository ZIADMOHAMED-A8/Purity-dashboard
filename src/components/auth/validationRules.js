export const emailRules = {
  required: "email is required",
}

export const passwordRules = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password is at least 8 characters",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
    message:
      "Password must contain uppercase, lowercase, number and special character",
  },
}

export const nameRules = {
  required: "please enter your name",
pattern:{
    value:/^[a-zA-Z\s'-]+$/,
    message:'please enter a valid name'
  }
}
