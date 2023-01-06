import avatar from "./assets/avatar.jpg"
import site1 from "./assets/site1.jpg"
import site2 from "./assets/site2.jpg"
import site3 from "./assets/site3.jpg"
import site4 from "./assets/site4.jpg"
import {useState} from "react";

function Main() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-neutral-900">
      <section className="min-h-screen">
        <nav className="py-10 flex justify-between">
          <h1 className="text-2xl font-custom dark:text-neutral-50">Yann D'Souza</h1>
          <ul className="flex items-center">
            <li onClick={() => setDarkMode(!darkMode)}><i className="fa-solid fa-moon fa-xl cursor-pointer dark:text-neutral-50"></i></li>
            <li className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 dark:from-orange-500 dark:to-amber-500"><a href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="">
          <img src={avatar} className="relative mx-auto w-64 h-64 rounded-full lg:w-48 lg:h-48" alt="rounded avatar"/>
        </div>
        <div className="text-center p-8 font-medium">
          <h2 className="text-3xl md:text-3xl lg:text-5xl py-2 text-teal-600 dark:text-amber-400">Yann D'Souza</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-neutral-50">Developer</h3>
          <p className="leading-8 text-gray-800 py-2 md:text-xl max-w-xl mx-auto dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit semper risus at sagittis. Aenean turpis eros, auctor at tellus feugiat, dignissim tempor ipsum.</p>
        </div>
        <div className="flex justify-center gap-16 text-gray-600 fa-3x dark:text-neutral-50">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </section>
      <section>
        <div className="font-medium my-10">
          <h3 className="text-2xl py-2 dark:text-neutral-50">Services i Offer</h3>
          <p className='leading-8 py-2 text-gray-800 dark:text-neutral-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus <span className="text-teal-500 dark:text-amber-400">hendrerit</span> semper risus at sagittis. Aenean turpis eros, <span className="text-teal-500 dark:text-amber-400">auctor</span> at tellus feugiat, dignissim tempor ipsum.</p>
        </div>
        <div className="lg:flex gap-10">
        <div className="font-medium text-center shadow-lg p-10 rounded-xl my-10">
          <i className="fa-solid fa-mountain-sun fa-3x text-gray-800 py-2 dark:text-teal-50"></i>
          <h3 className="text-lg pt-8 pb-2 dark:text-neutral-50">Beautiful Designs</h3>
          <p className='py-2 text-gray-800 dark:text-neutral-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit semper risus at sagittis.</p>
        </div>
          <div className="font-medium text-center shadow-lg p-10 rounded-xl my-10">
            <i className="fa-solid fa-mountain-sun fa-3x text-gray-800 py-2 dark:text-teal-50"></i>
            <h3 className="text-lg pt-8 pb-2 dark:text-neutral-50">Coding</h3>
            <p className='py-2 text-gray-800 dark:text-neutral-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit semper risus at sagittis.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="font-medium my-10">
          <h3 className="text-2xl py-2 dark:text-neutral-50">Portfolio</h3>
          <p className='leading-8 py-2 text-gray-800 dark:text-neutral-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus <span className="text-teal-500 dark:text-amber-400">hendrerit</span> semper risus at sagittis. Aenean turpis eros, <span className="text-teal-500 dark:text-amber-400">auctor</span> at tellus feugiat, dignissim tempor ipsum.</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-wrap lg:flex-row">
          <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={site1} alt=""/></div>
          <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={site2} alt=""/></div>
          <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={site3} alt=""/></div>
          <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover" width={"100%"} height={"100%"} src={site4} alt=""/></div>
        </div>
      </section>
    </main>
  </div>
  );
}

export default Main;
