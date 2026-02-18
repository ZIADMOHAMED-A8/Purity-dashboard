
import Avatar from '../../assets/Avatar.png'
export default function Avatars(){
    const avatars=[
        Avatar,
        Avatar,
        Avatar,
        Avatar,
        Avatar
    ]    
    
    return (
<div className="flex -space-x-3 ">
  {avatars.map((src, i) => (
    <img
      key={i}
      src={src}
      className="relative z-10 h-7 w-7 rounded-full border-2 border-white sm:h-8 sm:w-8"
      style={{ zIndex: avatars.length - i }}
      alt=""
    />
  ))}
</div>

     
    )
}
