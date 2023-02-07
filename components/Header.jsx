import { useContext, useState } from "react";
import { GlobalContext } from "../utils/context";

function Header() {
  const { isMenuVisible, setIsMenuVisible } = useContext(GlobalContext);
  return (
    <header className="absolute top-0 left-0 w-full pt-4 px-6 font-[vcr-osd] text-white flex justify-between font-semibold items-center">
      <div className="flex flex-col">
        <span className="text-xl">
          CTRL ALT DELETE <span className="title-decoration"></span>
        </span>
        <span className="text-xs">CODING NINJAS SRM.</span>
      </div>
      <button
        onClick={() => {
          setIsMenuVisible((visible) => {
            return !visible;
          });
        }}
        className="text-xs w-max px-[25px] py-[10px] cursor-pointer h-max border menu-button">
        {isMenuVisible ? "[ X ]" : "MENU"}
      </button>
    </header>
  );
}

export default Header;
