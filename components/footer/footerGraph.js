import clsx from "clsx";
import ParaText from "../text/paraText";
import data from "../../lib/pageData";

const FooterGraph = () => {
  const footer = data.footer;

  return (
    <div className={clsx(
      'w-full h-fit my-6 ',
      'box-col justify-center items-center ',
      'lg:items-start'
    )}>
      <ParaText content={footer.p[0]} />
      <ParaText content={footer.p[1]} />
      <ParaText content={footer.p[2]} />
    </div>
  )
};

export default FooterGraph;