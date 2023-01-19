import Footer from "./footer";
import css from "./layout.module.css";
import Main from "./main";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>

      <Nav/>

      <Main children={children} />

      <Footer />
    
    </div>
  )
};

export default Layout;

