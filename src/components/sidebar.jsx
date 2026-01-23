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
    <aside className="flex flex-col items-start w-64 p-4 ">

      <h1 className="text-xl font-medium uppercase pb-4 border-b">
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
        <ul className="flex flex-col gap-5 py-2  w-full">
            <h1 className="text-l py-4 font-medium uppercase">Account Pages</h1>
            {menu2Items.map((e)=>
            <SidebarElement Icon={e.icon} label={e.label}></SidebarElement>
            )}
        </ul>
    </aside>
  );
}
