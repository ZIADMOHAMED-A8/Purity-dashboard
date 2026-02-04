export default function Heading({children,...props}){
    return (
        <>
        <h2 {...props} className="text-xl font-bold first-letter:uppercase  ">{children}</h2>
        </>
    )
}
