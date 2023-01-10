import Dropdown from "./Dropdown";

function Nav(props: {
  darkMode: any; changeMode: any; language: any; changeLanguage: any; changeLanguageEN: any;
}) {

  return (
    <nav className="pt-10 pb-14 lg:py-8 flex items-center justify-between">
      <h1 className="text-2xl font-custom dark:text-neutral-50">Yann D'Souza</h1>
      <div className="flex flex-row justify-center items-center gap-2 lg:gap-4">
      <Dropdown language={props.language} changeLanguage={props.changeLanguage} changeLanguageEN={props.changeLanguageEN}/>
      <ul className="flex">
        {/*<li
          className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-orange-500 dark:to-amber-500">
          <a href="#">Resume</a></li>*/}
          <li>
              <span className="relative cursor-pointer" onClick={props.changeMode}>
                <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                <span className="flex justify-center items-center absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out dark:transition-transform dark:duration-300 dark:ease-in-out dark:bg-white dark:transform dark:translate-x-full">
                  {props.darkMode ? <i className="fa-solid fa-sun fa-2xs text-cyan-600 dark:text-amber-400"></i> : <i className="fa-solid fa-moon fa-2xs text-cyan-600 dark:text-amber-400"></i>}
                </span>
              </span>
          </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;