import { Slide } from "../../../types";

export const testSlide: Slide = {
    slideId: 5,
    left: {
        content: <div>left</div>,
        place: 2
    },
    center: {
        content: <div>center</div>,
        place: 4 
    },
    right: {
        content: <div>right</div>,
        place: 3
    },
    bottom: <div>bottom</div>
}
