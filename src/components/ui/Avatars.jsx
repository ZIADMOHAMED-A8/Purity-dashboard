
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
      className="w-8 h-8 rounded-full border-2 border-white relative z-10"
      style={{ zIndex: avatars.length - i }}
      alt=""
    />
  ))}
</div>

     
    )
}
