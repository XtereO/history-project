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
  test("Is click work", () => {
    const mEvent = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    wrapper.simulate("click", mEvent);
    expect(mEvent.stopPropagation).toBeCalledTimes(1);
  });
});
