import { useDispatch } from "react-redux";
import { YOUTUBE_LOGO, MENU_ICON, SEARCH_ICON } from "../utils/imagesPath";
import { openSideNav } from "../utils/configSlice";
import { useEffect, useState } from "react";
import { SUGGESTIONS_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    const timeout = setTimeout(getSuggestions, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [inputSearch]);

  const getSuggestions = async () => {
    if (inputSearch) {
      const data = await fetch(SUGGESTIONS_API + inputSearch);
      const json = await data.json();
    }
  };

  const toggleSidenav = () => {
    dispatch(openSideNav());
  };

  return (
    <div className="tw-grid tw-grid-cols-12 tw-mx-4 tw-items-center">
      <div className="tw-col-span-1 tw-flex tw-items-center">
        <img
          className="tw-w-8 tw-h-6 tw-cursor-pointer"
          src={MENU_ICON}
          alt="menu-icon"
          onClick={toggleSidenav}
        />
        <img
          className="tw-w-25 tw-h-15 tw-ml-4"
          src={YOUTUBE_LOGO}
          alt="logo"
        />
      </div>
      <div className="tw-col-span-2"></div>
      <div className="tw-col-span-6">
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          value={inputSearch}
          className="tw-border tw-w-full tw-border-gray-400 tw-rounded-l-full tw-py-2 tw-px-4"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="tw-col-span-1">
        <button className="tw-px-4 tw-py-1 tw-border tw-border-l-0 tw-rounded-r-full tw-border-gray-400 tw-bg-gray-100">
          <img className="tw-w-8 tw-h-8" alt="search" src={SEARCH_ICON} />
        </button>
      </div>
      <div className="tw-col-span-2 tw-mr-3 tw-justify-self-end">
        <button className="border bg tw-rounded-full tw-bg-pink-700 tw-px-3 tw-py-1 tw-text-white">
          A
        </button>
      </div>
    </div>
  );
};

export default Header;
