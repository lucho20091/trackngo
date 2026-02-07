import { Link } from "react-router-dom";
import { useState } from "react";
import menu_data from "../../data/menu-data";
import SearchArea from "../../common/SearchArea";

interface NavmenuProps {
  has_search?: boolean;
}

export default function Navmenu({ has_search }: NavmenuProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <ul className="d-none d-lg-block">
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown ? "has-dropdown" : ""}`}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
        {has_search && (
          <li className="menu-sear">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="search-trigger search-icon"
            >
              <i className="fal fa-search"></i>
            </a>
          </li>
        )}
      </ul>
      <SearchArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </>
  );
}
