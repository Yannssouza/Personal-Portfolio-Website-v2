import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Nav(props: {
  darkMode: any; changeMode: any;
}) {
  return (
    <nav className="py-10 flex items-center justify-between">
      <h1 className="text-2xl font-custom dark:text-neutral-50">Yann D'Souza</h1>
      <div className="flex flex-row justify-center items-center gap-6">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-100">
            Languages
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    English
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Português - PT
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ul className="flex">
        {/*<li onClick={props.changeMode}>
        </li>*/}
        {/*<li
          className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-orange-500 dark:to-amber-500">
          <a href="#">Resume</a></li>*/}
          <li>
              <span className="relative cursor-pointer" onClick={props.changeMode}>
                <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                <span className="flex justify-center items-center absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out dark:transition-transform dark:duration-300 dark:ease-in-out dark:bg-white dark:transform dark:translate-x-full">
                  {props.darkMode ? <i className="fa-solid fa-sun fa-2xs text-teal-600 dark:text-amber-400"></i> : <i className="fa-solid fa-moon fa-2xs text-teal-600 dark:text-amber-400"></i>}
                </span>
              </span>
          </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;