import { shallow } from "enzyme";
import { Slide } from "./Slide";
import { testSlide } from "./TestData";

describe("Test Slide Component", () => {
  let wrapper = shallow(<Slide {...testSlide} />);
  beforeEach(() => {
    wrapper = shallow(<Slide {...testSlide} />);
  });
  test("Has slide-container margin top", () => {
    expect(wrapper.find("#slide-container5").prop("style")).toHaveProperty(
      "marginTop",
      "20px"
    );
  });
  test("Has slide-container margin bottom", () => {
    expect(wrapper.find("#slide-container5").prop("style")).toHaveProperty(
      "marginBottom",
      "20px"
    );
  });
  test("Has slide-container class container", () => {
    expect(wrapper.find("#slide-container5").prop("className")).toContain(
      "container"
    );
  });
  test("Is slide-center content not empty", () => {
    expect(wrapper.find("#slide-center5").text()).toBe("center");
  });
  test("Is slide-bottom content not empty", () => {
    expect(wrapper.find("#slide-bottom5").text()).toBe("bottom");
  });
});
