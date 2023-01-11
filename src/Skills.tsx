function Skills(props: any) {
  return (
    <section>
      <div className="font-medium my-8">
        <h3 className="text-2xl py-2 text-cyan-600 dark:text-amber-400">{props.language ? props.languages.skills.pt : props.languages.skills.en}</h3>
        <p className="leading-8 py-2 text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus <span className="text-cyan-500 dark:text-amber-400">hendrerit</span> semper risus at
          sagittis. Aenean turpis eros, <span className="text-cyan-500 dark:text-amber-400">auctor</span> at tellus
          feugiat, dignissim tempor ipsum.</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-html5 fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">HTML</h3>
        </div>
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-css3-alt fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">CSS</h3>
        </div>
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-square-js fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">JavaScript</h3>
        </div>
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-react fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">React</h3>
        </div>
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-node-js fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">Node</h3>
        </div>
        <div
          className="flex flex-col items-center font-medium text-center shadow-lg p-6 rounded-xl w-32 dark:shadow-amber-400">
          <i className="fa-solid fa-terminal fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">Shell</h3>
        </div>
        {/*<div className="flex flex-col items-center font-medium text-center shadow-lg p-10 rounded-xl my-10 w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-git-alt fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">Git</h3>
        </div>
        <div className="flex flex-col items-center font-medium text-center shadow-lg p-10 rounded-xl my-10 w-32 dark:shadow-amber-400">
          <i className="fa-brands fa-github fa-3x text-gray-800 py-2 dark:text-amber-400"></i>
          <h3 className="text-lg py-1 dark:text-amber-400">Github</h3>
        </div>*/}
      </div>
    </section>
  );
}

export default Skills;