
import Heading from '../ui/Heading'
import Avatar from '../../assets/Avatar.png'
import OnlineIcon from '../ui/OnlineIcon'
import OfflineIcon from '../ui/OfflineIcon'
import ProgressBar from '../ui/ProgressBar'
import AuthorPorjectrows from './AuthorProjectrows'



export default function AuthorsTable() {
    return (
        <>
            <div className='flex flex-[3] flex-col bg-white p-4 rounded-2xl gap-10'>
                <Heading>Authors</Heading>
                <table className='[&>thead]:border-b-1 [&>tbody>tr]:border-b-1 [&>tbody>tr]:border-gray-300 [&>thead>th]:pb-4 [&>thead>th]:text-start
             [&>tbody>tr:last-child]:border-b-0 w-full ' >
                    <thead className='  w-full text-gray-400 border-gray-300 [&>th:first-child]:w-1/2   uppercase '>
                        {[{ title: 'Author', id: 1 }
                            , { title: 'Function', id: 2 },
                        { title: 'Status', id: 3 },
                        { title: 'Employed', id: 4 }].map(e =>
                            <th key={e.id} className='text-sm'>{e.title}</th>
                        )}

                    </thead>
                    <tbody className='[&>tr>td]:py-4'>
                        <AuthorPorjectrows></AuthorPorjectrows>
                        
                    </tbody>

                </table>
            </div>
        </>
    )
}
