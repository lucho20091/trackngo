import { Link } from "react-router-dom";
import { useState } from "react";
import menu_data from "../../data/menu-data";

export default function MobileMenu() {
  // menu toggle function
  const [navTitle, setNavTitle] = useState<string>("");
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const [navTitle2, setNavTitle2] = useState<string>("");
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };

  return (
    <div className="mean-bar d-none d-sm-block d-lg-none">
      <nav className="mean-nav">
        <ul>
          {menu_data.map((item, i) => (
            <li
              key={i}
              className={`${item.has_dropdown ? "has-dropdownss" : ""} ${navTitle === item.title ? "dropdown-opened" : ""}`}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
