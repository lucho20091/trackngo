 
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
        <ul >
          {menu_data.map((item, i) => (
            <li key={i} className={`${item.has_dropdown ? 'has-dropdownss' : ''} ${navTitle === item.title ? 'dropdown-opened' : ''}`}>
              <Link to={item.path}>
                {item.title}
              </Link>
              {item.has_dropdown && (
                <>
                  <ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                    {item?.submenus?.map((sub_item, index) => (
                      <li key={index} className={`${sub_item.has_inner_dropdown ? "has-dropdown" : ""}`}>
                        <Link to={sub_item.path}>
                          {sub_item.title}
                        </Link>
                        {sub_item.has_inner_dropdown && (
                          <>
                            <ul className="submenu" style={{ display: navTitle2 === sub_item.title ? "block" : "none" }}>
                              {sub_item?.submenus?.map((inner_sub_item, inner_index) => (
                                <li key={inner_index}><Link to={inner_sub_item.path}>{inner_sub_item.title}</Link></li>
                              ))}
                            </ul> 
                            <a className={`mean-expand ${sub_item.title === navTitle2 ? 'mean-clicked' : ''}`} onClick={() => openMobileMenu2(sub_item.title)} style={{ cursor: 'pointer' }} ><i className="far fa-plus"></i></a>

                          </>
                        )}
                      </li>
                    ))}                     
                  </ul>
                  <a className={`mean-expand ${item.title === navTitle ? 'mean-clicked' : ''}`} onClick={() => openMobileMenu(item.title)} style={{ cursor: 'pointer' }} ><i className="far fa-plus"></i></a>
                </>
              )}
            </li>
          ))}


        </ul>
      </nav>
    </div>
  )
}
