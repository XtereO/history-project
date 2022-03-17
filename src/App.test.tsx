import { mount } from "enzyme";
import App from "./App";
import { withRouter } from "./ui/HOC";

describe("Test App component", () => {
  let wrapper = mount(withRouter(<App />)());
  beforeEach(() => {
    wrapper = mount(withRouter(<App />)());
  });
  test("Is Header render", () => {
    expect(!!wrapper.find("#header")).toBe(true);
  });
  test("Is Article render", () => {
    expect(!!wrapper.find("#article")).toBe(true);
  });
  test("Is Footer render", () => {
    expect(!!wrapper.find("#footer")).toBe(true);
  });
});
