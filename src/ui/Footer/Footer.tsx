import { memo } from "react";
import { Navbar } from "react-bootstrap";

export const Footer = memo(() => {
  return (
    <footer id="footer">
      <Navbar
        variant={"dark"}
        bg={"primary"}
        id={"nav-footer"}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          color: "white",
          paddingRight: "20px",
        }}
      >
        Источник: Н. И. Павленко Петр I
      </Navbar>
    </footer>
  );
});
