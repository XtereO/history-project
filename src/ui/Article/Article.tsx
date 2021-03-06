import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Article.css";
import { getTheme } from "../../bll/selectors/presentationSelector";
import { db } from "../../db/db";
import { Slide } from "../Bricks/Slide/Slide";
import { Slide as SlideType } from "../../types";
import { Navigation } from "../../consts";

export const Article = memo(() => {
  const theme = useSelector(getTheme);
  const [content, setContent] = useState([]);
  useEffect(() => {
    //@ts-ignore
    setContent(db[theme ?? Navigation.Home]);
    window.scrollTo({ top: 0 });
  }, [theme]);
  return (
    <article id={"article"}>
      {content.map((c: SlideType) => (
        <Slide {...c} key={`slide${c.slideId}`} />
      ))}
    </article>
  );
});
