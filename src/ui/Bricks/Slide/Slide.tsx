import { memo } from "react";
import { Slide as Props } from "../../../types";
import "./Slide.css";
import { useInView } from "react-intersection-observer";
import { testSlide } from "./TestData";

export const Slide = memo<Props>(({ center, bottom, slideId }) => {
  const { inView, ref } = useInView();
  const marginTopContainer = "10px";
  const marginBottomContainer = "10px";
  return (
    <div
      ref={ref}
      style={{
        marginTop: marginTopContainer,
        marginBottom: marginBottomContainer,
      }}
      className={`${inView && "slide-animation"} container`}
      id={`slide-container${slideId}`}
      key={`slide${slideId}`}
    >
      <div id={`slide-center${slideId}`}>{center}</div>
      <div id={`slide-bottom${slideId}`}>{bottom}</div>
    </div>
  );
});

export const TestSlide = () => {
  return <Slide {...testSlide} />;
};
