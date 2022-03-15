import { memo } from "react";

type Props = {
  imgs: React.ReactNode[];
};
export const ImgGroup = memo<Props>(({ imgs }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexFlow: "wrap",
        gap:20,
        justifyContent: "center",
        minHeight: 200,
      }}
    >
      {imgs}
    </div>
  );
});
