import Avatars from './Avatars'
import Heading from './Heading'
export default function Projects(){
    function toCurrencyConverter(text){
        return `$${text}`
    }
    return (
        <>
        <div className='flex flex-[3] flex-col bg-white p-4 rounded-2xl gap-10'>
            <Heading>Projects</Heading>
            <table className='[&>thead]:border-b-1 [&>tbody>tr]:border-b-1 [&>tbody>tr]:border-gray-300 [&>thead>th]:pb-4 [&>thead>th]:text-start
             [&>tbody>tr:last-child]:border-b-0 w-full ' >
                <thead className='  w-full text-gray-400 border-gray-300   uppercase '>
                    <th className='w-[50%]'>companies</th>
                    <th className=''>members</th>
                    <th>budget</th>
                    <th>completion</th>
                    </thead>
                    <tbody className='[&>tr>td]:py-4'>
                    <tr>
                    <td className='text-l w-[50%] font-bold'>Chakra soft ui design</td>
                        <td><Avatars></Avatars></td>
                        <td className='text-l font-bold'>{toCurrencyConverter('14,000')}</td>

                        <td>
                            <h1 className='m-0 p-0'>60%</h1>
                            <progress value="50" max="100" className='    w-full h-2
    appearance-none
    [&::-webkit-progress-bar]:bg-gray-200
    [&::-webkit-progress-bar]:rounded-full
    [&::-webkit-progress-value]:#4fd1c5
    [&::-webkit-progress-value]:rounded-full
    [&::-moz-progress-bar]:bg-blue-500
    [&::-moz-progress-bar]:rounded-full'></progress></td>

                    </tr>
                    <tr>
                        <td>ss</td>
                        <td><Avatars></Avatars></td>

                        <td>ss</td>
                        <td>ss</td>

                    </tr>
                    </tbody>

            </table>
        </div>
        </>
    )
}