import IconWithanUnderline from "./IconWithanUnderline"


export default function LabeldIcon({ Icon, Headear, body,...props }) {
    return (
        <>
            <div {...props} className="flex gap-8 "  >
                <IconWithanUnderline Icon={Icon}></IconWithanUnderline>
                <div>
                    <div className="text-l font-medium">
                        {Headear}
                    </div>
                    <div className="text-gray-400">
                       {body}
                    </div>
                </div>
            </div>

        </>
    )
}
