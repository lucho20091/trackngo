 
import { Link } from "react-router-dom";
import { blog_data } from "../../data/blog-data";

export default function NewsArea() {
  return (
    <section className="blog-section fix section-padding">
      <div className="container">
        <div className="blog-details-wrapper">
          <div className="row g-4 align-items-center">
            {blog_data.map((item) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 mt-0 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="news-box-items-3">
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="news-content">
                    <h3>
                      <Link to="/news-details">{item.title}</Link>
                    </h3>

                    <ul>
                      <li>
                        <i className="fa-regular fa-circle-user"></i>
                        By {item.author}
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        {item.comments.toString().padStart(2, "0")} Comment
                      </li>
                    </ul>

                    <div className="post-date">
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
