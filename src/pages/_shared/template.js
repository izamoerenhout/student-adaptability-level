import "./main.css";
import { Link } from "react-router-dom";

function Template(props) {
  return (
    <>
      <div className="nav-holder">
        <div className="container">
          <nav className="navbar">
          <Link
              to="/"
              className="navbar-link"
            >
              Student Adaptability Level
            </Link>
            <Link
              to="/predict"
              className="navbar-link"
            >
              Tool
            </Link>
            <Link
              to="/about"
              className="navbar-link"
            >
              About
            </Link>
          </nav>
        </div>
      </div>

      <main>{props.children}</main>

      <footer>Developed by Iza Moerenhout</footer>
    </>
  );
}

export default Template;
