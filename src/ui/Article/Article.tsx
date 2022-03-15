import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../bll/selectors/presentationSelector";
import { db } from "../../db/db";
import { Slide } from "../Bricks/Slide/Slide";

export const Article = memo(() => {
  const theme = useSelector(getTheme)
  const [content, setContent] = useState([])
  useEffect(()=>{
    //@ts-ignore
    setContent(db[theme ? theme : "home"])
  },[theme])
  return <article id={"article"}>{content.map(c=><Slide {...c} />)}</article>;
});
