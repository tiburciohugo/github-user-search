import logo from "../assets/devfinder.svg";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

interface NavbarProps {
  theme: any;
}

export default function Navbar(props: NavbarProps) {
  const html = document.querySelector("html");

  const condition = html?.classList.contains("dark");

  return (
    <div className="flex items-center justify-between w-full max-w-6xl py-3 my-6 z-1">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-32 h-[2.437rem] cursor-pointer  dark:white-text"
        />
      </a>

      {condition ? (
        <button
          onClick={props.theme}
          className="flex items-center justify-between space-x-2 cursor-pointer white-text hover:gray-blue font-semibold h-[1.188rem] text-grayish-blue dark:fill-white"
        >
          LIGHT
          <img
            id="sun"
            src={sun}
            alt="sun-icon"
            className="fill-black grayish-blue dark:fill-white ml-2"
          />
        </button>
      ) : (
        <button
          onClick={props.theme}
          className="flex items-center justify-between space-x-2 cursor-pointer hover:dark-hover font-semibold h-[1.188rem] text-grayish-blue dark:fill-white"
        >
          DARK
          <img
            id="moon"
            src={moon}
            alt="moon-icon"
            className="grayish-blue dark:fill-white ml-2"
          />
        </button>
      )}
    </div>
  );
}
