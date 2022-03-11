import { memo } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navigation } from "../../consts";

export const Header = memo(() => {
  return (
    <header id={"header"}>
      <Navbar bg={"primary"} variant={"dark"} id={"nav"}>
        <Container>
          <Nav className="me-auto">
            <NavLink id={"early-years"} to={"early-years"}><Nav.Link>{Navigation.EarlyYears}</Nav.Link></NavLink>
            <NavLink id={"azov-war"} to={"azov-war"}><Nav.Link>{Navigation.AzovWar}</Nav.Link></NavLink>
            <Nav.Link id={"great-journey"}>{Navigation.GreatJourney}</Nav.Link>
            <Nav.Link id={"sweden-war"}>{Navigation.SwedenWar}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
});
