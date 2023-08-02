import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="nav-left">
        <h3 className="logo">life<span className="S">S</span></h3>
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-listItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="nav-listItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="nav-listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="nav-listItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <Link to="/settings">
            <img className="nav-img" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="nav-list">
            <li className="nav-listItem login">
              <Link className="link" to="/login">
                Log in
              </Link>
            </li>
            <li className="nav-listItem nav-listItem-button">
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="nav-searchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
