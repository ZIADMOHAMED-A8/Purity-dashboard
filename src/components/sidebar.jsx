import { Home, BarChart3, CreditCard, Wrench, User, FileText, Rocket } from "lucide-react";
import SidebarElement from "./sidebarElement";

export default function Sidebar() {

  const menuItems = [
    { label: "Dashboard", icon: Home },
    { label: "Tables", icon: BarChart3 },
    { label: "Billing", icon: CreditCard },
    { label: "RTL", icon: Wrench },
  ];
  const menu2Items=[
    {label:'Profile',icon:User},
    {label:'Sign in',icon:FileText},
    {label:'Sign up',icon:Rocket},

  ]

  return (
    <aside className="flex flex-col items-start basis-64 px-4 ">

      <h1 className="text-xl font-medium uppercase pb-4  border-b border-transparent
bg-gradient-to-r from-transparent via-gray-300 to-transparent
bg-no-repeat
[background-size:100%_1px]
[background-position:0_100%] text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Purity Dashboard
      </h1>

      <ul className="flex flex-col gap-5 py-4  w-full">
        {menuItems.map((item, index) => (
          <SidebarElement
            key={index}
            Icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
        <ul className="flex flex-col gap-2   w-full">
            <h1 className="text-l  font-medium p-4 py-2 uppercase">Account Pages</h1>
            {menu2Items.map((e)=>
            <SidebarElement Icon={e.icon} label={e.label}></SidebarElement>
            )}
        </ul>
    </aside>
  );
}
