function Skills2() {
  return (
    <section>
      <div className="font-medium my-10">
        <h3 className="text-2xl py-2 dark:text-neutral-50">Services i Offer</h3>
        <p className="leading-8 py-2 text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus <span className="text-teal-500 dark:text-amber-400">hendrerit</span> semper risus at
          sagittis. Aenean turpis eros, <span className="text-teal-500 dark:text-amber-400">auctor</span> at tellus
          feugiat, dignissim tempor ipsum.</p>
      </div>
      <div className="lg:flex gap-10">
        <div className="font-medium text-center shadow-lg p-10 rounded-xl my-10">
          <i className="fa-solid fa-mountain-sun fa-3x text-gray-800 py-2 dark:text-teal-50"></i>
          <h3 className="text-lg pt-8 pb-2 dark:text-neutral-50">Beautiful Designs</h3>
          <p className="py-2 text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus hendrerit semper risus at sagittis.</p>
        </div>
        <div className="font-medium text-center shadow-lg p-10 rounded-xl my-10">
          <i className="fa-solid fa-mountain-sun fa-3x text-gray-800 py-2 dark:text-teal-50"></i>
          <h3 className="text-lg pt-8 pb-2 dark:text-neutral-50">Coding</h3>
          <p className="py-2 text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus hendrerit semper risus at sagittis.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills2;