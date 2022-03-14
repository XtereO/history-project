import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//only for test!!!
export const withRouter = (Component: React.ReactNode) => {
  return () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Component ?? <></>} />
        </Routes>
      </BrowserRouter>
    );
  };
};
