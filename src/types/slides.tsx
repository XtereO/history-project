import React from "react";

export type Slide = {
  left: Position;
  center: Position;
  right: Position;
  bottom: React.ReactNode | null;
};
type Position = {
  place: number;
  content: React.ReactNode;
} | null;
