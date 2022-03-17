import { shallow } from "enzyme";
import { Footer } from "./Footer";

describe("Test Footer component", () => {
  let wrapper = shallow(<Footer />);
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  test("Is Footer has bg primary", () => {
    expect(wrapper.find("#nav-footer").get(0).props).toHaveProperty(
      "bg",
      "primary"
    );
  });
  test("Is Footer has variant dark", () => {
    expect(wrapper.find("#nav-footer").get(0).props).toHaveProperty(
      "variant",
      "dark"
    );
  });
  test("Is Footer has sticky bottom", () => {
    expect(wrapper.find("#nav-footer").get(0).props).toHaveProperty(
      "fixed",
      "bottom"
    );
  });
  test("Is Footer has display flex", () => {
    expect(wrapper.find("#nav-footer").get(0).props["style"]).toHaveProperty(
      "display",
      "flex"
    );
  });
  test("Is Footer has flexDirection row", () => {
    expect(wrapper.find("#nav-footer").get(0).props["style"]).toHaveProperty(
      "flexDirection",
      "row"
    );
  });
  test("Is Footer has justifyContent end", () => {
    expect(wrapper.find("#nav-footer").get(0).props["style"]).toHaveProperty(
      "justifyContent",
      "end"
    );
  });
  test("Is Footer has color white", () => {
    expect(wrapper.find("#nav-footer").get(0).props["style"]).toHaveProperty(
      "color",
      "white"
    );
  });
  test("Is Footer has color white", () => {
    expect(wrapper.find("#nav-footer").get(0).props["style"]).toHaveProperty(
      "paddingRight",
      "20px"
    );
  });
  test("Is Footer has text", () => {
    expect(wrapper.find("#nav-footer").text()).toBe(
      "Источник: Н. И. Павленко Петр I"
    );
  });
});
