import { memo } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Navigation, Translation } from "../../consts";
import { HeaderNavLink } from "../Bricks/HeaderNavLink";

export const Header = memo(() => {
  return (
    <header id={"header"}>
      <Navbar
        expand={"md"}
        bg={"primary"}
        variant={"dark"}
        id={"nav"}
        sticky={"top"}
      >
        <Container>
          <Navbar.Brand id={"brand-link"}>Петр I</Navbar.Brand>
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
