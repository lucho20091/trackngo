import { Link } from "react-router-dom";
import menu_data from "../../data/menu-data";

export default function MobileMenu() {
  // menu toggle function
  return (
    <div className="mean-bar d-none d-sm-block d-lg-none">
      <nav className="mean-nav">
        <ul>
          {menu_data.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
