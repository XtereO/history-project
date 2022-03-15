import { memo } from "react";
import { Slide as Props } from "../../../types";
import { testSlide } from "./TestData";

export const Slide = memo<Props>(({ left, right, center, bottom, slideId }) => {
  const gridTemplateColumns = `${left?.place ?? 0}fr ${center?.place ?? 0}fr ${
    right?.place ?? 0
  }fr`;
  const gap = "5px";
  const marginTopContainer = "10px";
  const marginBottomContainer = "10px";
  return (
    <div
      style={{
        marginTop: marginTopContainer,
        marginBottom: marginBottomContainer,
      }}
      className={"container"}
      id={`slide-container${slideId}`}
      key={`slide${slideId}`}
    >
      <div
      className="slide-animation"
        id={`slide${slideId}`}
        style={{ display: "grid", gridTemplateColumns, gap }}
      >
        <div id={`slide-left${slideId}`}>{left?.content}</div>
        <div id={`slide-center${slideId}`}>{center?.content}</div>
        <div id={`slide-right${slideId}`}>{right?.content}</div>
      </div>
      <div id={`slide-bottom${slideId}`}>{bottom}</div>
    </div>
  );
});

export const TestSlide = ()=>{
    return<Slide {...testSlide}/>
}
