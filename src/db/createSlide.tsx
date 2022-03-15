import React from "react";
import { Slide } from "../types/slides";

export const cS = (
  slideId: number,
  center: React.ReactNode,
  bottom?: React.ReactNode
): Slide => {
  return {
    slideId,
    center,
    bottom,
  };
};
