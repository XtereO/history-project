import { shallow } from "enzyme";
import { Navigation } from "../../consts";
import { Header } from "./Header";

describe("Test Header Component", () => {
  let wrapper = shallow(<Header />);
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test("Is Header has bg primary", () => {
    expect(wrapper.find("#nav").props().bg).toBe("primary");
  });
  test("Is header has variant dark", () => {
    expect(wrapper.find("#nav").props().variant).toBe("dark");
  });
  test("Is link early-years exist", () => {
    expect(wrapper.find("#early-years").text()).toBe(Navigation.EarlyYears);
  });
  test("Click on route early-years", () => {
    const link = wrapper.find("#early-years");

    link.simulate("click");

    expect(window.location.href).toContain("early-years");
  });
  test("Is link azov-war exist", () => {
    expect(wrapper.find("#azov-war").text()).toBe(Navigation.AzovWar);
  });
  test("Is link great-journey exist", () => {
    expect(wrapper.find("#great-journey").text()).toBe(Navigation.GreatJourney);
  });
  test("Is link sweden-war exist", () => {
    expect(wrapper.find("#sweden-war").text()).toBe(Navigation.SwedenWar);
  });
});
