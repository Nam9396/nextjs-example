import Link from "next/link";
import css from "./main.module.css";

const Main = ({ children }) => {
  return (
    <main className={css.main}>
      {children}
    </main>
  )
};

export default Main;
