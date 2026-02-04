const buttonBaseClass =
  "bg-[#4fd1c5] p-4 rounded-2xl text-white cursor-pointer uppercase font-medium transition-colors hover:bg-[#45b8ad]"

export default function FormButton({
  children,
  type = "submit",
  className = "",
  disabled,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${buttonBaseClass} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
