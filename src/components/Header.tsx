import { Link } from "react-router";
import AppLogo from "./AppLogo";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const navlist = ["home", "restaurant", "food", "about", "contact", "order"];
  return (
    <div className=" h-14 px-10 flex justify-between backdrop-blur-3xl bg-blue-600 items-center  z-50 w-full">
      <AppLogo size={24} />
      <div className="flex gap-x-3 px-10 items-center w-full ">
        {navlist.map((navitem) => (
          <Link
            to={`/${navitem === "home" ? "" : navitem}`}
            className="capitalize text-white font-semibold hover:cursor-pointer"
          >
            {navitem}
          </Link>
        ))}
      </div>
      <div>
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
