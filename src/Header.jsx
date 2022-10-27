import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { PetsNew } from "./PetsNew";
import { useState } from "react";

export function Header() {
  const [isPetsNewVisible, setIsPetsNewVisible] = useState(false);

  const handlePetsNewShow = () => {
    setIsPetsNewVisible(true);
  };

  const handlePetsNewHide = () => {
    setIsPetsNewVisible(false);
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark">
      <Modal show={isPetsNewVisible} onClose={handlePetsNewHide}>
        <PetsNew onPetsNewClose={handlePetsNewHide} />
      </Modal>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>Adopt Today 💟</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="about" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" onClick={handlePetsNewShow}>
                Add a Pet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
