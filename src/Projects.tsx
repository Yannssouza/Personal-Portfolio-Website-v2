import site1 from "./assets/site1.jpeg";
import site2 from "./assets/site2.jpeg";
import site3 from "./assets/site3.jpg";
import site4 from "./assets/site4.jpg";

function Projects(props: any) {
  return (
    <section>
      <div className="my-10 font-medium">
        <h3 className="py-2 text-2xl text-cyan-600 dark:text-amber-400">
          {props.language
            ? props.languages.projects.title.pt
            : props.languages.projects.title.en}
        </h3>
        <p className="py-2 leading-8 text-gray-800 dark:text-neutral-200">
          {props.language
            ? props.languages.projects.text.pt
            : props.languages.projects.text.en}{" "}
          <span className="text-cyan-500 dark:text-amber-400">
            {props.language
              ? props.languages.projects.text.highlightPt
              : props.languages.projects.text.highlightEn}
          </span>
          {"."}
        </p>
      </div>
      <div className="flex flex-col gap-10 pb-2 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={site1}
            alt=""
          />
          <div className="py-2">
            <h4 className="text-cyan-600 dark:text-amber-400">Jammming</h4>
            <p className="leading-2 font-medium text-gray-800 dark:text-neutral-200">
              {props.language
                ? props.languages.projects.descriptions.site1.pt
                : props.languages.projects.descriptions.site1.en}
            </p>
          </div>
        </div>
        <div className="flex-1 basis-1/3">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={site2}
            alt=""
          />
          <div className="py-2">
            <h4 className="text-cyan-600 dark:text-amber-400">Pacman.js</h4>
            <p className="leading-2 font-medium text-gray-800 dark:text-neutral-200">
              {props.language
                ? props.languages.projects.descriptions.site2.pt
                : props.languages.projects.descriptions.site2.en}
            </p>
          </div>
        </div>
        {/*<div className="flex-1 basis-1/3">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={site3}
            alt=""
          />
        </div>
        <div className="flex-1 basis-1/3">
          <img
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={site4}
            alt=""
          />
        </div>*/}
      </div>
    </section>
  );
}

export default Projects;
