import Dropdown from "./Dropdown";
import languages from "./languages";

function Nav(props: {
  darkMode: any;
  changeMode: any;
  language: any;
  changeLanguage: any;
  changeLanguageEN: any;
}) {
  return (
    <nav className="flex items-center justify-between pt-10 pb-14 lg:py-8">
      <h1 className="font-custom text-2xl dark:text-neutral-50">
        Yann D'Souza
      </h1>
      <div className="flex flex-row items-center justify-center gap-2 lg:gap-4">
        <Dropdown
          languages={languages}
          language={props.language}
          changeLanguage={props.changeLanguage}
          changeLanguageEN={props.changeLanguageEN}
        />
        <ul className="flex">
          {/*<li
          className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-orange-500 dark:to-amber-500">
          <a href="#">Resume</a></li>*/}
          <li>
            <span
              className="relative cursor-pointer"
              onClick={props.changeMode}
            >
              <span className="block h-6 w-10 rounded-full bg-gray-400 shadow-inner"></span>
              <span className="focus-within:shadow-outline absolute inset-y-0 left-0 mt-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow transition-transform duration-300 ease-in-out dark:translate-x-full dark:transform dark:bg-white dark:transition-transform dark:duration-300 dark:ease-in-out">
                {props.darkMode ? (
                  <i className="fa-solid fa-sun fa-2xs text-cyan-600 dark:text-amber-400"></i>
                ) : (
                  <i className="fa-solid fa-moon fa-2xs text-cyan-600 dark:text-amber-400"></i>
                )}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
