import React from "react";

export type Slide = {
  slideId: number;
  left: Position;
  center: Position;
  right: Position;
  bottom: React.ReactNode | null;
};
type Position = {
  place: number;
  content: React.ReactNode;
} | null;
