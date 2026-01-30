import toCurrencyConverter from '../utils/CurrnecyAdder'
import Avatars from './Avatars'
import Heading from './Heading'
import ProgressBar from './ProgressBar'
import ProjectsRows from './ProjectsRows'

export default function Projects(){

    return (
        <>
        <div className='flex flex-[3] flex-col bg-white p-4 rounded-2xl gap-10'>
            <Heading>Projects</Heading>
            <table className='[&>thead]:border-b-1 [&>tbody>tr]:border-b-1 [&>tbody>tr]:border-gray-300 [&>thead>th]:pb-4 [&>thead>th]:text-start
             [&>tbody>tr:last-child]:border-b-0 w-full ' >
                <thead className='  w-full text-gray-400 border-gray-300 [&>th:first-child]:w-1/2   uppercase '>
                    {['companies','members','budget','completion'].map(e => 
                        <th>{e}</th>
                    )}
  
                    </thead>
                    <tbody className='[&>tr>td]:py-4'>
                        <ProjectsRows></ProjectsRows>
                    </tbody>

            </table>
        </div>
        </>
    )
}