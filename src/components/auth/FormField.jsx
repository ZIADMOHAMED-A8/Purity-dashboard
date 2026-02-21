const inputBaseClass = "focus:outline-0 focus:ring-0 w-full"

export default function FormField({
  label,
  id,
  type = "text",
  error,
  register,
  name,
  rules = {},
  placeholder,
  className = "flex flex-col gap-2 w-full",
  labelClassName = "text-start",
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={inputBaseClass}
      />
      <div className="text-red-400 block  text-center   text-xs">
        {error?.message}
      </div>

    </div>
  )
}
