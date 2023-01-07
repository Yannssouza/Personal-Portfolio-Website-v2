import React from "react";

function Nav(props: { changeMode: any; }) {
  return (
    <nav className="py-10 flex justify-between">
      <h1 className="text-2xl font-custom dark:text-neutral-50">Yann D'Souza</h1>
      <ul className="flex items-center">
        <li onClick={props.changeMode}><i className="fa-solid fa-moon fa-xl cursor-pointer dark:text-neutral-50"></i></li>
        {/*<li
          className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-orange-500 dark:to-amber-500">
          <a href="#">Resume</a></li>*/}
      </ul>
    </nav>
  );
}

export default Nav;