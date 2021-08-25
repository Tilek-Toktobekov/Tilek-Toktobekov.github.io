import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const MegaMenu = ({ menuItems }) => {
  return (
    <nav className="nav header__nav">
      <ul className="nav__list">
        {menuItems.map((item) => (
          <li key={String(item.id)} className="nav__item">
            <Link key={String(item.id)} to={`${item.href}`} className="nav__link">
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
