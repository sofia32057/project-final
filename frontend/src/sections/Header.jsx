import { NavLink, Link } from "react-router-dom";
import { useStore } from "../../stores/useStore";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Wedding info", href: "/" },
  { name: "Confirmation", href: "/confirmation" },
  { name: "My Attendance", href: "/my-attendance" },
  { name: "RSVP", href: "/rsvp" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useStore();

  return (
    <div className="bg-[#ffffff]">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Project wedding site</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {isLoggedIn &&
              navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-900 text-sm font-semibold leading-6"
                >
                  {item.name}
                </NavLink>
              ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <NavLink
                href="#"
                className="text-gray-900 text-sm font-semibold leading-6"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </NavLink>
            ) : (
              <NavLink
                href="/login"
                className="text-gray-900 text-sm font-semibold leading-6"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </NavLink>
            )}
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Project Wedding site</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="text-gray-700 -m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-gray-500/10 -my-6 divide-y">
                <div className="space-y-2 py-6">
                  {isLoggedIn &&
                    navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-base text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </div>
                <div className="py-6">
                  {!isLoggedIn && (
                    <NavLink
                      to="/login"
                      className="text-base text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7"
                    >
                      Log in
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};
