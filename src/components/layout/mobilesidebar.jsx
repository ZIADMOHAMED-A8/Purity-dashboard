import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logout from "../../utils/logout";

export default function MobileSidebar({ menuItems, accountItems, isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);

  const visibleAccountItems = isAuthenticated
    ? accountItems.slice(0, 2)
    : accountItems.slice(2, 4);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow"
      >
        <MenuIcon color="#4fd1c5" />
      </button>

        <>
          <div
            className={isOpen ?"fixed inset-0 z-40 bg-black/40 md:hidden"
              : "fixed inset-0 z-40 bg-black/40 hidden md:hidden"

            }
            onClick={() => setIsOpen(false)}
          />

          <aside className={isOpen ?"fixed inset-y-0 duration-300 left-0 z-50 w-[260px] bg-white p-6 md:hidden"  
          :"fixed inset-y-0 duration-300 -left-full z-50 w-[260px] bg-white p-6 md:hidden"
           
           
          } 

          >
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <h1 className="text-sm font-semibold uppercase text-gray-800">Purity Dashboard</h1>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mb-5 flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.label}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 text-[#a0aec0] hover:bg-gray-50"
                  >
                    <span className="rounded-xl bg-white p-2">
                      <item.icon className="text-[#4fd1c5]" size={18} />
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="px-3 py-2 text-xs font-medium uppercase text-gray-500">Account Pages</h2>
            <ul className="flex flex-col gap-3">
              {visibleAccountItems.map((item) => {
                if (item.label === "Log out") {
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={async () => {
                          await logout();
                          setIsOpen(false);
                        }}
                        className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-[#a0aec0] hover:bg-gray-50"
                      >
                        <span className="rounded-xl bg-white p-2">
                          <item.icon className="text-[#4fd1c5]" size={18} />
                        </span>
                        <span className="text-sm">{item.label}</span>
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      to={item.label}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 text-[#a0aec0] hover:bg-gray-50"
                    >
                      <span className="rounded-xl bg-white p-2">
                        <item.icon className="text-[#4fd1c5]" size={18} />
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </>
      
      
    </>
  );
}