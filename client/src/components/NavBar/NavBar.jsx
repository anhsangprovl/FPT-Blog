import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navBar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="navLeft">
        {/* <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-instagram-square"></i> */}
        <a href="http://localhost:3000/" rel="Home">
          <img
            src="//canhme.com/wp-content/uploads/2016/08/Canh-Me-Logo.png"
            alt="Canh Me"
            width="300"
          ></img>
        </a>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img className="navImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
