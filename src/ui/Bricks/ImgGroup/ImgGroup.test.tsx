import { shallow } from "enzyme"
import { ImgGroup } from "./ImgGroup"
import bow from "../../../assets/slides/bow.png"

describe("Test ImgGroup component", ()=>{
    let wrapper = shallow(<ImgGroup imgs={[<img id={"bow"} src={bow} />]} id={100}/>)
    beforeEach(()=>{
        wrapper = shallow(<ImgGroup imgs={[<img id={"bow"} src={bow} />]} id={100}/>)
    })
    test("Is img in rendered", ()=>{
        expect(wrapper.find("#bow").isEmptyRender()).toBe(false)
    })
})
