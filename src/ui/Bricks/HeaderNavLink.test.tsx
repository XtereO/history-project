import { shallow } from "enzyme";
import { HeaderNavLink } from "./HeaderNavLink";

describe("Test HeaderNavLink component", () => {
  let wrapper = shallow(
    <HeaderNavLink id={"link"} to={"/link"} title={"title link"} />
  );
  beforeEach(() => {
    wrapper = shallow(
      <HeaderNavLink id={"link"} to={"/link"} title={"title link"} />
    );
  });
  test("Is title rendered", () => {
    expect(wrapper.find("#link").text()).toContain("title link");
  });
  test("Is active link have right className", () => {
    expect(
      //@ts-ignore
      wrapper.find("#link").prop("className")({ isActive: true })
    ).toContain("header_navlink_active");
  });
  test("Is link have right className", () => {
    expect(
      //@ts-ignore
      wrapper.find("#link").prop("className")({ isActive: false })
    ).toContain("header_navlink_hover");
  });
});
