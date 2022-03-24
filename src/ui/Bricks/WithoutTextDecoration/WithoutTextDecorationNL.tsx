import { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./WithoutTextDecorationNL.module.css"

type Props = {
  to: string;
  children: React.ReactNode;
};
export const WithoutTextDecorationNL = memo<Props>(
  ({ to, children }) => {
    return <NavLink className={styles.navlink} to={to}>{children}</NavLink>;
  }
);
