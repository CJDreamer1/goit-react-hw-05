import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <ul className={css.container}>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="MovieDetails" className={getLinkClass}>
            MovieDetails
          </NavLink>
        </li>
        <li>
          <NavLink to="MoviesPage" className={getLinkClass}>
            MoviesPage
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment" className={getLinkClass}>
            Payments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
