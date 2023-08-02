import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cheerup.theme-sphere.com/lifestyle/wp-content/uploads/sites/12/2018/08/shutterstock_619466837-1024x683.jpg"
          alt=""
        />
        <p>It is beautiful blog</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://twitter.com/envato" class="social-link">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/envato" class="social-link">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://twitter.com/envato" class="social-link">
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </a>
          <a href="https://twitter.com/envato" class="social-link">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
