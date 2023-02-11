import Footer from "./footer";
import css from "./layout.module.css";
import Meta from "./meta";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Meta />
      <Nav/>
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  )
};

export default Layout;

