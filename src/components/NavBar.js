import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/details">Details</Link>
      <Link to="/list">List</Link>
    </div>
  );
}