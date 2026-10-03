import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>ABC School</h2>
        <p>Education • Discipline • Excellence</p>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;