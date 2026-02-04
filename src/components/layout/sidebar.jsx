import { Home, BarChart3, CreditCard,  User, FileText, Rocket } from "lucide-react";
import SidebarElement from "./sidebarElement";

export default function Sidebar() {

  const menuItems = [
    { label: "Dashboard", icon: Home },
    { label: "Tables", icon: BarChart3 },
    { label: "Billing", icon: CreditCard },
    
  ];
  const menu2Items=[
    {label:'Profile',icon:User},
    {label:'Sign in',icon:FileText},
    {label:'Sign up',icon:Rocket},

  ]

  return (
    <aside className="flex sticky flex-col group/side items-start w-[60px] sm:w-[10px] hover:w-[200px] sm:hover:w-[200px] duration-200 px-2 sm:px-4 
      left-0 top-0 h-screen bg-white sm:bg-transparent z-40 sm:z-auto
    shadow-lg sm:shadow-none transition-all duration-200">
      <h1 className="text-xl font-medium uppercase pb-4 opacity-0 sm:opacity-0 border-b border-transparent
      group-hover/side:opacity-100 duration-300 
      bg-gradient-to-r from-transparent via-gray-300 to-transparent
      bg-no-repeat
      [background-size:100%_1px]
      [background-position:0_100%] text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Purity Dashboard
      </h1>

      <ul className="flex flex-col gap-3 sm:gap-5 py-4 w-full">
        {menuItems.map((item, index) => (
          <SidebarElement
            key={index}
            Icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
        <ul className="flex flex-col gap-2 w-full">
            <h1 className="text-sm sm:text-base font-medium p-4 py-2 opacity-0 sm:opacity-0 group-hover/side:opacity-100 duration-300 uppercase">Account Pages</h1>
            {menu2Items.map((e, index)=>
            <SidebarElement key={index} Icon={e.icon} label={e.label}></SidebarElement>
            )}
        </ul>
    </aside>
  );
}
