import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
}


export default function Breacrumb({ title, subtitle }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url(/assets/img/breadcrumb.png)` }}>
      <div className="shape">
        <img src="assets/img/breadcrumb-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              {subtitle}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
