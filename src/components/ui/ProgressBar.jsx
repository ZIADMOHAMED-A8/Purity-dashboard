export default function ProgressBar({value,max=100}){
    return (
        <>
        <div className='m-0 p-0 text-[#4fd1c5] text-sm sm:text-lg font-medium'>{`${value}%`}</div>
        <progress value={value} max={max} className='    w-full h-2
    appearance-none
    [&::-webkit-progress-bar]:bg-gray-200
    [&::-webkit-progress-bar]:rounded-full
    [&::-webkit-progress-value]:bg-[#4fd1c5]
    [&::-webkit-progress-value]:rounded-full
    [&::-moz-progress-bar]:bg-[#4fd1c5]
    [&::-moz-progress-bar]:rounded-full
    p-0 m-0
    [&::-webkit-progress-bar]:p-0
    [&::-webkit-progress-bar]:m-0
    [&::-webkit-progress-value]:p-0
    [&::-webkit-progress-value]:m-0
    [&::-moz-progress-bar]:p-0
    [&::-moz-progress-bar]:m-0
    '></progress>
    </>
    )
}
