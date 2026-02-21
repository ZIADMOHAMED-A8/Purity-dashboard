import { Home, BarChart3, CreditCard, User, FileText, Rocket, LogOut } from "lucide-react";
import SidebarElement from "./sidebarElement";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/getUser";
import MobileSidebar from "./mobilesidebar";
import { LucideSquareChevronDown } from "lucide-react";
import { Edit } from "lucide-react";
import Skeleton from "react-loading-skeleton";

export default function Sidebar() {
  const { data, isLoading } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  const menuItems = [
    { label: "Dashboard", icon: Home },
    { label: "Tables", icon: BarChart3 },
    { label: "Billing", icon: CreditCard },
  ];

  const accountItems = [
    { label: "Profile", icon: User },
    { label: "Log out", icon: LogOut },
    { label: "Sign in", icon: FileText },
    { label: "Sign up", icon: Rocket },
  ];
  const adminItems = [
    { label: 'Show Users', icon: LucideSquareChevronDown, route: 'showusers' },
    { label: 'Edit Data', icon: Edit, route: 'edit' },

  ]

  const isAuthenticated = Boolean(data?.data?.user);
  const visibleAccountItems = isAuthenticated
    ? accountItems.slice(0, 2)
    : accountItems.slice(2, 4);
  if (isLoading) {
    return <Skeleton width={20} height={'100vh'}></Skeleton>
  }
  else {
    const isAdmin = data?.data?.user?.user_metadata?.role === 'admin'

    return (
      <>
        <aside
          className="group/side sticky left-0 top-0 z-40 hidden h-[100vh] w-[100px] flex-col items-start pl-8 pt-8 transition-all duration-200 hover:w-[250px] md:flex"
        >
          <h1
            className="border-b border-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent bg-no-repeat pb-4 text-center text-xs font-medium uppercase whitespace-nowrap opacity-0 [background-position:0_100%] [background-size:100%_1px] duration-300 group-hover/side:opacity-100 sm:text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Purity Dashboard
          </h1>

          <ul className="flex w-full flex-col gap-3 py-4 sm:gap-5">
            {menuItems.map((item) => (
              <SidebarElement key={item.label}
                Icon={item.icon}
                route={item.label}
                label={item.label} />
            ))}
          </ul>

          <ul className="flex w-full flex-col gap-2">
            <h1 className="p-4 py-2 text-sm font-medium uppercase opacity-0 duration-300 group-hover/side:opacity-100 sm:text-base">
              Account Pages
            </h1>
            {visibleAccountItems.map((item) => (
              <SidebarElement
                key={item.label}
                Icon={item.icon}
                label={item.label}
                route={item.label}
                isLogout={item.label === "Log out"}
              />
            ))}
          </ul>
          {isAdmin &&
            <ul className="flex w-full flex-col gap-2">
              <h1 className="p-4 py-2 text-sm font-medium uppercase opacity-0 duration-300 group-hover/side:opacity-100 sm:text-base">
                Admin Pages
              </h1>
              {adminItems.map((item) => (
                <SidebarElement
                  key={item.label}
                  Icon={item.icon}
                  label={item.label}
                  route={item.route}
                  isLogout={item.label === "Log out"}
                />
              ))}
            </ul>
          }
        </aside>

        <MobileSidebar
          menuItems={menuItems}
          accountItems={accountItems}
          isAuthenticated={isAuthenticated}
        />
      </>

    );
  }
}
