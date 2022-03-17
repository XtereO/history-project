import { mount } from "enzyme";
import { withRouter } from "../HOC";
import { Navigation } from "../../consts";
import { Header } from "./Header";

describe("Test Header Component", () => {
  let wrapper = mount(withRouter(<Header />)());
  beforeEach(() => {
    wrapper = mount(withRouter(<Header />)())
  });
  test("Is Header has bg primary", () => {
    expect(wrapper.find("#nav").get(0).props).toHaveProperty("bg","primary");
  });
  test("Is Header has variant dark", () => {
    expect(wrapper.find("#nav").get(0).props).toHaveProperty("variant","dark");
  });
  test("Is Header has sticky top", () => {
    expect(wrapper.find("#nav").get(0).props).toHaveProperty("sticky","top");
  });
  test("Is Header expand md", ()=>{
    expect(wrapper.find("#nav").get(0).props).toHaveProperty("expand","md")
  })
  test("Is button toggle exist", ()=>{
    expect(!!wrapper.find("#btn-toggle").get(0)).toBe(true)
  })
  test("Is brand link exist", () => {
    expect(!!wrapper.find("#brand-link").get(0)).toBe(true)
  })
  test("Is link home exist", ()=>{
    expect(wrapper.find("#home").get(0).props).toHaveProperty("id",Navigation.Home)
  })
  test("Is link early-years exist", () => {
    expect(wrapper.find("#early-years").get(0).props).toHaveProperty("id",Navigation.EarlyYears);
  });
  test("Is link azov-war exist", () => {
    expect(wrapper.find("#azov-war").get(0).props).toHaveProperty("id",Navigation.AzovWar);
  });
  test("Is link great-journey exist", () => {
    expect(wrapper.find("#great-journey").get(0).props).toHaveProperty("id",Navigation.GreatJourney);
  });
  test("Is link sweden-war exist", () => {
    expect(wrapper.find("#sweden-war").get(0).props).toHaveProperty("id",Navigation.SwedenWar);
  });
});
