import avatar from "./assets/avatar3.jpeg";

function Hero(props: any) {
  return (
    <section>
      <div className="">
        <img
          src={avatar}
          className="relative mx-auto h-64 w-64 rounded-full ring ring-cyan-600 ring-offset-2 dark:ring-amber-400 dark:ring-offset-neutral-900 lg:h-48 lg:w-48"
          alt="rounded avatar"
        />
      </div>
      <div className="p-8 text-center font-medium">
        <h2 className="py-2 text-3xl text-cyan-600 dark:text-amber-400 md:text-3xl lg:text-5xl">
          Yann D'Souza
        </h2>
        <h3 className="py-2 text-2xl dark:text-neutral-50 md:text-3xl">
          {props.language
            ? props.languages.hero.title.pt
            : props.languages.hero.title.en}
        </h3>
        <p className="mx-auto max-w-xl py-2 leading-8 text-gray-800 dark:text-neutral-200 md:text-xl">
          {props.language
            ? props.languages.hero.text.pt
            : props.languages.hero.text.en}
        </p>
      </div>
      <div className=" flex justify-center gap-16 text-gray-600 dark:text-neutral-50">
        <i className="fa-brands fa-stack-overflow fa-3x"></i>
        <a href="https://www.linkedin.com/in/yann-d-souza-a486a424b/">
          <i className="fa-brands fa-linkedin fa-3x"></i>
        </a>
        <a href="https://github.com/Yannssouza">
          <i className="fa-brands fa-github fa-3x"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
