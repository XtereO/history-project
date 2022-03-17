import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../bll/selectors/presentationSelector";
import { db } from "../../db/db";
import { Slide } from "../Bricks/Slide/Slide";
import {Slide as SlideType} from "../../types"
import { Navigation } from "../../consts";

export const Article = memo(() => {
  const theme = useSelector(getTheme)
  const [content, setContent] = useState([])
  useEffect(()=>{
    //@ts-ignore
    setContent(db[theme ?? Navigation.Home])
  },[theme])
  return <article style={{minHeight:"calc(100vh - 115px)"}} id={"article"}>{content.map((c:SlideType)=><Slide {...c} key={`slide${c.slideId}`} />)}</article>;
});
