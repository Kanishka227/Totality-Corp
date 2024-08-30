import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css"
import { sort } from "../features/propertyList/propertyListSlice";
import { selectCartNumber } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartNumber = useSelector(selectCartNumber)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <nav
      className={`${styles.container} navbar navbar-expand-lg bg-body-tertiary`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Totality Corp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            sort by
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(sort("location"))}
              >
                Location
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(sort("price"))}
              >
                Price
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(sort("bedrooms"))}
              >
                Bedroom
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => navigate("/cart")}>
          Go To Cart <span className="badge text-bg-secondary">{cartNumber}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
