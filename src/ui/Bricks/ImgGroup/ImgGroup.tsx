import { memo } from "react";
import "./ImgGroup.css";

type Props = {
  id: number;
  imgs: React.ReactNode[];
};
export const ImgGroup = memo<Props>(({ imgs, id }) => {
  return (
    <div
      id={`idImgGroup${id}`}
      style={{
        display: "flex",
        flexDirection: "row",
        flexFlow: "wrap",
        gap: 20,
        justifyContent: "center",
        marginTop: 10,
        overflowX: "hidden",
      }}
    >
      {imgs}
    </div>
  );
});
