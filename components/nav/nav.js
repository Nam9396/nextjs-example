import clsx from "clsx";
import Logo from "./logo";
import MainMenu from "./mainMenu";
import MobileMenu from "./mobileMenu";


const Nav = () => {
  return (
    <nav className={clsx(
      'w-full h-fit p-2 bg-white ',
      'box-col justify-center items-center',
      'lg:box-row lg:justify-between lg:items-center lg:fixed lg:top-0 lg:z-40'
    )}>
      <Logo />
      <MainMenu position={'nav'} />
      <MobileMenu />
    </nav>
  )
};

export default Nav;