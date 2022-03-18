import { memo, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Navigation, Translation } from "../../consts";
import { HeaderNavLink } from "../Bricks/HeaderNavLink/HeaderNavLink";
import { presentationActions } from "../../bll/reducers/presentationReducer";

export const Header = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname && Object.values(Navigation).some(n=>n===location.pathname.slice(1))) {
      dispatch(
        presentationActions.setTheme(location.pathname.slice(1) as Navigation)
      );
    } else {
      dispatch(presentationActions.setTheme(Navigation.Home));
    }
  }, [location.pathname]);
  return (
    <header id={"header"}>
      <Navbar
        fixed={"top"}
        expand={"md"}
        bg={"primary"}
        variant={"dark"}
        id={"nav"}
      >
        <Container>
          <Navbar.Brand id={"brand-link"}>
            <div>
              <NavLink
                id={Navigation.Home}
                className={"header_navbar_brand header_navbar_brand_hover"}
                to={"/home"}
              >
                {Translation.Home}
              </NavLink>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id={"btn-toggle"}
          />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <HeaderNavLink
                id={Navigation.EarlyYears}
                to={Navigation.EarlyYears}
                title={Translation.EarlyYears}
              />
              <HeaderNavLink
                id={Navigation.AzovWar}
                to={Navigation.AzovWar}
                title={Translation.AzovWar}
              />
              <HeaderNavLink
                id={Navigation.GreatJourney}
                to={Navigation.GreatJourney}
                title={Translation.GreatJourney}
              />
              <HeaderNavLink
                id={Navigation.SwedenWar}
                to={Navigation.SwedenWar}
                title={Translation.SwedenWar}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
});
