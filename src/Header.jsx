import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>Adopt Today 💟</h1>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
