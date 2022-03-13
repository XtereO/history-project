import { memo } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Navigation } from "../../consts";
import { HeaderNavLink } from "../Bricks/HeaderNavLink";

export const Header = memo(() => {
  return (
    <header id={"header"}>
      <Navbar bg={"primary"} variant={"dark"} id={"nav"}>
        <Container>
          <Nav className="me-auto">
            <HeaderNavLink id={"early-years"} to={"/early-years"} title={Navigation.EarlyYears} />
            <HeaderNavLink id={"azov-war"} to={"/azov-war"} title={Navigation.AzovWar}/>
            <HeaderNavLink id={"great-journey"} to={"/great-journey"} title={Navigation.GreatJourney} /> 
            <HeaderNavLink id={"sweden-war"} to={"/sweden-war"} title={Navigation.SwedenWar}/>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
});
