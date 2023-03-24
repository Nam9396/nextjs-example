import clsx from "clsx";
import HeaderText from "../text/headerText";
import ParaText from "../text/paraText";


const HeroGraph = ({ data }) => {
  return (
    <div className={clsx(
      'w-full h-fit box-col justify-center items-start my-10',
    )}>
      <HeaderText content={data.header} />
      <ParaText content={data.p} />   
    </div>
  )
};

export default HeroGraph;