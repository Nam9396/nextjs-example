import clsx from "clsx";
import MainMenu from "../nav/mainMenu";
import FooterGraph from "./footerGraph";
import FooterLogo from "./footerLogo";


const Footer = () => {
  return (
    <footer className={clsx(
      'w-full h-fit py-8 px-4 bg-light_purple ',
      'box-col justify-center items-center',
      'md:box-row md:justify-around md:items-center'
    )}>
      <FooterLogo />
      <div className={clsx(
        'w-full box-col justify-center items-center  ',
        'lg:w-[60%] lg:box-col lg:justify-center lg:items-start',
      )}>
        <MainMenu position={'footer'} />
        <FooterGraph />
      </div>
      
    </footer>
  )
};

export default Footer;