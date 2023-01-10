function Footer() {
  const date = new Date;
  let [year]: [string] = [
    date.getFullYear().toString()
  ];
  {/*const dateFormat = () => {
    if (month.length < 2) {
      // @ts-ignore
      month = +month + 1;
      month = "0" + month;
    } else {
      return month;
    }
    if (day.length < 2) {
      day = "0" + day;
    } else {
      return day;
    }
    return [month, "/", day, "/", year];
  };*/}

  return (
    <footer className="flex justify-center text-center p-6 font-medium dark:text-white">
      <div>
        <svg
          width="30px"
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block
      fill-current"
        >
          <path
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
        <p className="text-xl py-2">Yann D'Souza</p>
        <p>{year}</p>
      </div>
    </footer>
  );
}

export default Footer;
