import React from "react"
import Link from "next/link"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"

const navigation = [
  {
    name: "Data Structures",
    href: "/category/data-structures",
    current: false,
  },
  { name: "Algorithms", href: "/category/algorithms", current: false },
  { name: "JavaScript", href: "/category/javascript", current: false },
]

function classNames(...classes) {
  return classes.filter(String).join(" ")
}

const Nav = ({ categories }) => {
  return (
    <Disclosure as="nav" className="bg-base-100 fixed w-full z-10 top-0">
      {({ open }) => (
        <>
          <div className="sm:px-3 lg:px-2 max-w-7xl mx-auto px-2">
            <div className="relative flex items-center justify-center h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex sm:items-stretch sm:justify-start items-center justify-center md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <span className="font-bold bg-primary text-base-200 p-2 text-xl2 shadow rounded">
                    <Link href="/">ARAVIN.NET</Link>
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-primary text-white"
                            : "text-gray-500 hover:bg-primary-focus hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className></hr>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-primary text-white"
                      : "text-gray-500 hover:bg-primary-focus hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <hr className></hr>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
