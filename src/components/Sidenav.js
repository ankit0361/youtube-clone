import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { closeSideNav } from "../utils/configSlice";
import { MAIN_MENU, YOU_MENU } from "../utils/constants";
import { MENU_ICON, YOUTUBE_LOGO } from "../utils/imagesPath";

const Sidenav = () => {
  const dispatch = useDispatch();
  const showSidenav = useSelector((store) => store.config.showSidenav);
  const hideSideNav = () => {
    dispatch(closeSideNav());
  };

  return (
    <>
      <ul className="tw-pl-4 tw-w-1/2">
        {MAIN_MENU.map((menu, index) => (
          <li
            key={menu.text}
            className={
              index === 0
                ? "tw-mt-0 tw-cursor-pointer"
                : "tw-mt-4 tw-cursor-pointer"
            }
          >
            <img className="tw-mx-auto" alt={menu.text} src={menu.img} />
            <span className="tw-text-xs">{menu.text}</span>
          </li>
        ))}
      </ul>
      <div>
        <Offcanvas
          className="!tw-w-60"
          show={showSidenav}
          onHide={() => {
            hideSideNav(false);
          }}
        >
          <Offcanvas.Header className="!tw-px-6 !tw-pt-0">
            <img
              className="tw-w-4 tw-h-4 tw-cursor-pointer"
              src={MENU_ICON}
              alt="menu-icon"
            />
            <img
              className="tw-w-28 tw-h-14 tw-ml-4"
              src={YOUTUBE_LOGO}
              alt="logo"
            />
          </Offcanvas.Header>
          <Offcanvas.Body className="!tw-p-6 !tw-pt-0">
            <nav>
              <ul className="tw-pl-0">
                {MAIN_MENU.slice(0, 3).map((menu) => (
                  <li
                    key={menu.text}
                    className="tw-flex tw-p-2 hover:tw-bg-slate-100 tw-rounded- tw-cursor-pointer"
                  >
                    <img alt={menu.text} src={menu.img} />
                    <span className="tw-ml-4">{menu.text}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="tw-font-medium tw-text-lg tw-mb-1 tw-p-2">
                You
              </div>
              <ul className="tw-pl-0">
                {YOU_MENU.map((menu) => (
                  <li
                    key={menu.text}
                    className="tw-flex tw-p-2 hover:tw-bg-slate-100 tw-rounded-lg tw-cursor-pointer   "
                  >
                    <img alt={menu.text} src={menu.img} />
                    <span className="tw-ml-4">{menu.text}</span>
                  </li>
                ))}
              </ul>
              <hr />
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidenav;
