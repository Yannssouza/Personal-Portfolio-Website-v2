import avatar from "./assets/avatar.jpg";

function Hero(props: any) {
  return (
    <section>
      <div className="">
        <img src={avatar} className="relative mx-auto w-64 h-64 rounded-full ring-offset-2 ring ring-cyan-600 dark:ring-amber-400 lg:w-48 lg:h-48" alt="rounded avatar" />
      </div>
      <div className="text-center p-8 font-medium">
        <h2 className="text-3xl md:text-3xl lg:text-5xl py-2 text-cyan-600 dark:text-amber-400">Yann D'Souza</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-neutral-50">{props.language ? "Desenvolvedor" : "Developer"}</h3>
        <p className="leading-8 text-gray-800 py-2 md:text-xl max-w-xl mx-auto dark:text-neutral-200">Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit semper risus at sagittis. Aenean turpis eros,
          auctor at tellus feugiat, dignissim tempor ipsum.</p>
      </div>
      <div className="flex justify-center gap-16 text-gray-600 fa-3x dark:text-neutral-50">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </section>
  );
}

export default Hero;