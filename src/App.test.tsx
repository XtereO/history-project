import { mount } from "enzyme";
import App from "./App";

describe("Test App component", () => {
  let wrapper = mount(<App />);
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("Is Header render", () => {
    expect(wrapper.find("#header").isEmptyRender()).toBe(false);
  });
  test("Is Banner render", () => {
    expect(wrapper.find("#banner").isEmptyRender()).toBe(false);
  });
  test("Is Article render", () => {
    expect(wrapper.find("#article").isEmptyRender()).toBe(false);
  });
  test("Is Footer render", () => {
    expect(wrapper.find("#footer").isEmptyRender()).toBe(false);
  });
});
