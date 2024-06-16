import { NavLink, Link, useNavigate } from "react-router-dom";
import { useStore } from "../../stores/useStore";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../components/Button";
import { HashLink } from "react-router-hash-link";

const navigation = [
  // { name: "Info", href: "/" },
  { name: "Schedule", href: "/#schedule" },
  { name: "Venue", href: "/#venue" },
  { name: "Accomodations", href: "/#accomodation" },
  { name: "FAQ", href: "/#faq" },
  { name: "Our story", href: "/#story" },
  // { name: "My Attendance", href: "/my-attendance" },
  { name: "Message board", href: "/messageboard" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const logout = useStore((state) => state.logout);
  const [scroll, setScroll] = useState("bg-transparent");
  const nav = useNavigate();

  const listenScrollEvent = () => {
    window.scrollY > 40
      ? setScroll("bg-[#FFFFFF] shadow-md")
      : setScroll("bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <header
      className={`sticky top-0 ${scroll} z-50 flex w-full justify-center font-cormorant`}
    >
      <div className="relative inset-x-0 top-0 mx-2 my-2 w-full max-w-screen-xl">
        <nav
          className="flex items-center justify-between p-2 lg:gap-x-12 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="text-base -m-1.5 p-1.5 font-semibold leading-7 text-primary hover:text-secondary hover:no-underline md:text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Project wedding site</span>
              Sarah & Michael's wedding
            </Link>
          </div>

          {/* Hamburger start */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Hamburger end */}

          {/* Desktop menu start */}
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:gap-x-6">
            {isLoggedIn &&
              navigation.map((item) =>
                item.href.includes("#") ? (
                  <HashLink
                    key={item.name}
                    to={item.href}
                    className="text-nowrap text-sm font-semibold leading-6 text-primary hover:text-secondary active:text-secondary"
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="text-nowrap text-sm font-semibold leading-6 text-primary active:text-secondary"
                  >
                    {item.name}
                  </NavLink>
                ),
              )}
            {isLoggedIn && (
              <Button
                label={"RSVP"}
                type={"link"}
                style={"primary"}
                href={"/rsvp"}
                handler={() => setMobileMenuOpen(false)}
              />
            )}
          </div>
          <div className="hidden text-nowrap lg:flex lg:justify-end">
            {isLoggedIn ? (
              <Button
                label={"Log out"}
                type={"button"}
                style={"text"}
                handler={() => {
                  setMobileMenuOpen(false);
                  logout();
                  nav("/");
                }}
              />
            ) : (
              <Button
                label={"Log in"}
                type={"link"}
                style={"text"}
                href={"/login"}
                handler={() => setMobileMenuOpen(false)}
              />
            )}
          </div>
        </nav>
        {/* Desktop menu end */}

        {/* Mobile menu start */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base -m-1.5 p-1.5 font-cormorant font-semibold leading-7 text-primary md:text-lg"
              >
                <span className="sr-only">Project wedding site</span>
                Sarah & Michael's wedding
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
                {isLoggedIn && (
                  <div className="space-y-2 py-6">
                    <Button
                      label={"RSVP"}
                      type={"link"}
                      style={"primary"}
                      href={"/rsvp"}
                      handler={() => setMobileMenuOpen(false)}
                    />

                    {navigation.map((item) =>
                      item.href.includes("#") ? (
                        <HashLink
                          key={item.name}
                          to={item.href}
                          className="text-base text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </HashLink>
                      ) : (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="text-base text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ),
                    )}
                  </div>
                )}
                <div className="py-6">
                  {isLoggedIn ? (
                    <Button
                      label={"Log out"}
                      type={"button"}
                      style={"text"}
                      handler={() => {
                        logout();
                        setMobileMenuOpen(false);
                        nav("/");
                      }}
                    />
                  ) : (
                    <Button
                      label={"Log in"}
                      type={"link"}
                      style={"text"}
                      href={"/login"}
                      handler={() => setMobileMenuOpen(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        {/* Mobile menu end */}
      </div>
    </header>
  );
};
