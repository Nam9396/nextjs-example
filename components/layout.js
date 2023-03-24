import Footer from "./footer/footer";
import Main from "./main/main";
import Nav from "./nav/nav";
import Meta from "./meta";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Meta />
      <Nav />
      <Main children={children} />
      <Footer />
    </div>
  )
};

export default Layout;