import clsx from "clsx";
import Search from "../search/search";
import Author from "./author";
import HeroGraph from "./heroGraph";
import HeroImage from "./heroImage";


const HeroSection = ({ data, position }) => {
  return (
    <div className={clsx(
      'w-full p-4 box-col justify-center items-center mb-10',
      'md:box-row md:justify-center md:items-center'
    )}>

      <HeroImage srcUrl={data.img} />

      <div className={clsx(
        'w-full h-fit box-col justify-center items-start',
        'md:w-[40%]'
      )}>
        <HeroGraph data={data} />
        {position === 'home' ? <Author /> : null}
        {position === 'home' ? <Search /> : null}
      </div>
      
    </div>
  )
};

export default HeroSection;