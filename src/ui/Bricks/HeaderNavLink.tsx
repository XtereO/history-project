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
    <Nav.Link>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "header_navlink_active header_navlink_hover"
            : "header_navlink header_navlink_hover"
        }
        to={to}
        id={id}
      >
        {title}
      </NavLink>
    </Nav.Link>
  );
});
