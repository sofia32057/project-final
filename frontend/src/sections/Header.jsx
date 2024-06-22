import { NavLink, Link, useNavigate } from "react-router-dom";
import { useStore } from "../stores/useStore";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/Button";
import { HashLink } from "react-router-hash-link";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const hashlinks = [
  { name: "Schedule", href: "/#schedule", description: "What happens when." },
  { name: "Venue", href: "/#venue" },
  { name: "Accomodations", href: "/#accomodation" },
  { name: "FAQ", href: "/#faq" },
  { name: "Our story", href: "/#story" },
  { name: "Our guests", href: "/#guests" },
];
const navlinks = [
  { name: "My Attendance", href: "/my-attendance" },
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
          <div className="hidden items-center justify-end text-nowrap lg:flex lg:flex-1 lg:gap-x-6">
            {/* Drop down menu starts */}
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                  Wedding info
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                </PopoverButton>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-primary/10">
                    <div className="p-4">
                      {hashlinks.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-accent/15"
                        >
                          <div className="flex-auto">
                            <HashLink
                              key={item.name}
                              to={item.href}
                              className="text-nowrap text-sm font-bold leading-6 text-primary hover:text-secondary active:text-secondary"
                            >
                              {item.name}
                            </HashLink>
                            <p className="mt-1 text-primary/80">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </Popover>
            </PopoverGroup>
            {/* Drop down menu ends */}

            {isLoggedIn &&
              navlinks.map((item) => (
                <HashLink
                  key={item.name}
                  to={item.href}
                  className="text-nowrap text-sm font-semibold leading-6 text-primary hover:text-secondary active:text-secondary"
                >
                  {item.name}
                </HashLink>
              ))}
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
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 shadow-lg sm:max-w-sm sm:ring-1 sm:ring-primary/10">
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
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary">
                {isLoggedIn && (
                  <div className="space-y-2 py-6">
                    <div className="py-6">
                      <Button
                        label={"RSVP"}
                        type={"link"}
                        style={"primary"}
                        href={"/rsvp"}
                        handler={() => setMobileMenuOpen(false)}
                      />
                    </div>
                    <div className="py-2 font-cormorant text-primary">
                      {hashlinks.map((item) => (
                        <HashLink
                          key={item.name}
                          to={item.href}
                          className="text-base -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:bg-accent/15"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </HashLink>
                      ))}
                    </div>
                    <div className="py-2 font-cormorant text-primary">
                      {navlinks.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="text-base -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:bg-accent/15"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
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
