import { memo } from "react";
import styles from "./ImgGroup.module.css";

type Props = {
  id: number;
  desription?: string;
  imgs: React.ReactNode[];
};
export const ImgGroup = memo<Props>(({ imgs, desription, id }) => {
  return (
    <div>
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
    <div className={styles.imgGroup__textGray} id={`img-description-${id}`}>
      {desription}
    </div>
    </div>
  );
});
