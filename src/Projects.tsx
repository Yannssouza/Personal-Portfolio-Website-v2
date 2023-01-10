import site1 from "./assets/site1.jpg";
import site2 from "./assets/site2.jpg";
import site3 from "./assets/site3.jpg";
import site4 from "./assets/site4.jpg";

function Projects() {
  return (
    <section>
      <div className="font-medium my-10">
        <h3 className="text-2xl py-2 text-cyan-600 dark:text-amber-400">Projects</h3>
        <p className="leading-8 py-2 text-gray-800 dark:text-neutral-200">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus <span className="text-cyan-500 dark:text-amber-400">hendrerit</span> semper risus
          at sagittis. Aenean turpis eros, <span className="text-cyan-500 dark:text-amber-400">auctor</span> at tellus
          feugiat, dignissim tempor ipsum.</p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-wrap lg:flex-row">
        <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover"
                                               width={"100%"} height={"100%"}
                                               src={site1} alt="" /></div>
        <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover"
                                               width={"100%"} height={"100%"}
                                               src={site2} alt="" /></div>
        <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover"
                                               width={"100%"} height={"100%"}
                                               src={site3} alt="" /></div>
        <div className="basis-1/3 flex-1"><img className="rounded-lg object-cover"
                                               width={"100%"} height={"100%"}
                                               src={site4} alt="" /></div>
      </div>
    </section>
  );
}

export default Projects;