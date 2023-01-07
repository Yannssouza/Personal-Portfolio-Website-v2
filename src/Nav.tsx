import React from "react";

function Nav(props: {
  darkMode: any; changeMode: any;
}) {
  return (
    <nav className="py-10 flex items-center justify-between">
      <h1 className="text-2xl font-custom dark:text-neutral-50">Yann D'Souza</h1>
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
    </nav>
  );
}

export default Nav;