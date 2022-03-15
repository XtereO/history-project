import { shallow } from "enzyme"
import { Slide } from "./Slide";
import { testSlide } from "./TestData";

describe("Test Slide Component", ()=>{
    let wrapper = shallow(<Slide {...testSlide} />)
    beforeEach(()=>{
        wrapper = shallow(<Slide {...testSlide} />)
    })
    test("Has slide grid set", ()=>{
        expect(wrapper.find("#slide5").prop("style")).toHaveProperty("gridTemplateColumns", "2fr 4fr 3fr")
    })
    test("Has slide gap set", ()=>{
        expect(wrapper.find("#slide5").prop("style")).toHaveProperty("gap","5px")
    })
    test("Has slide-container margin top", ()=>{
        expect(wrapper.find("#slide-container5").prop("style")).toHaveProperty("marginTop","10px")
    })
    test("Has slide-container margin bottom", ()=>{
        expect(wrapper.find("#slide-container5").prop("style")).toHaveProperty("marginBottom","10px")
    })
    test("Has slide-container animation", ()=>{
        expect(wrapper.find("#slide-container5").prop("className")).toContain("slide-animation")
    })
    test("Has slide-container class container", ()=>{
        expect(wrapper.find("#slide-container5").prop("className")).toContain("container")
    })
    test("Is slide-left content not empty", ()=>{
        expect(wrapper.find(`#slide-left5`).text()).toBe("left")
    })
    test("Is slide-center content not empty",()=>{
        expect(wrapper.find("#slide-center5").text()).toBe("center")
    })
    test("Is slide-right content not empty", ()=>{
        expect(wrapper.find("#slide-right5").text()).toBe("right")
    })
    test("Is slide-bottom content not empty", ()=>{
        expect(wrapper.find("#slide-bottom5").text()).toBe("bottom")
    })
})
