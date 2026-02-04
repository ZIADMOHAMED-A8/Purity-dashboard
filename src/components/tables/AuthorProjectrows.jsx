import AuthorsData from "../../utils/AuthorsData"
import OfflineIcon from "../ui/OfflineIcon"
import OnlineIcon from "../ui/OnlineIcon"
import Avatar from '../../assets/Avatar.png'
const states_mapping = {
    offline: OfflineIcon,
    online: OnlineIcon
}


export default function AuthorPorjectrows() {
    return (
        <>
            {AuthorsData.map(e => {
                const Icon = states_mapping[e.status]
                return (
                    <tr key={e.id}>
                        <td>
                            <div className='flex items-center gap-4'>
                                <div className='bg-linear-to-r from-[#2f345a] to-[#0f1326] rounded-2xl w-[64px] h-[64px] '>
                                    <img src={Avatar} className='w-[64px] h-[64px]'></img>
                                </div>
                                <div>
                                    <p className='font-bold'>{e.name}</p>
                                    <p className='text-gray-500'>{e.email}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className='font-bold'>{e.role}</p>
                            <p className='text-gray-500'>{e.department}</p>
                        </td>
                        <td>
                            <Icon></Icon>
                        </td>
                        <td>
                            <p className="font-bold"> {e.employedAt}</p>
                        </td>
                    </tr>
                )
            }
            )}
        </>
    )
}
