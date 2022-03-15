import { memo } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderNavLink.css";

type Props = {
  id: string;
  to: string;
  title: string;
};
export const HeaderNavLink = memo<Props>(({ id, to, title }) => {
  return (
    <div className="header_navlink_wrapper">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "header_navlink_active header_navlink_hover"
            : "header_navlink header_navlink_hover"
        }
        to={`/${to}`}
        id={id}
      >
        {title}
      </NavLink>
    </div>
  );
});
