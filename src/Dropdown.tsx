import { Menu, Transition } from "@headlessui/react";
import { Fragment, MouseEventHandler } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown(props: {
    language: any;
    changeLanguageEN: MouseEventHandler<HTMLAnchorElement> | undefined; changeLanguage: MouseEventHandler<HTMLAnchorElement> | undefined;
}) {
  return (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button
        className="inline-flex items-align w-full justify-center rounded-md p-1.5 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-100">
        <div className="flex-col justify-center items-center">
          <span>{props.language ? "Português" : "English"}</span>
          <i className="fa-solid fa-earth-americas mx-1"></i>
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </div>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={props.changeLanguage}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900 dark:bg-neutral-700 cursor-pointer dark:text-white' : 'text-gray-700 dark:text-white',
                  'block px-4 py-2 text-sm'
                )}
              >
                English - US
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={props.changeLanguageEN}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900 dark:bg-neutral-700 cursor-pointer dark:text-white' : 'text-gray-700 dark:text-white',
                  'block px-4 py-2 text-sm'
                )}
              >
                Português - BR
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

export default Dropdown;