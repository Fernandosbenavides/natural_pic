import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{ fontSize: "1.5rem" }}>
        {" "}
        🏠 Home{" "}
      </Link>
      <Link to="/favoritos" style={{ fontSize: "1.5rem" }}>
        {" "}
        ❤️ Favoritas{" "}
      </Link>
    </nav>
  );
};
export default Navbar;
