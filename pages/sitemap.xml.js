import { createFinalSiteMap } from "../lib/function";

const SiteMap = () => {};

export default SiteMap;

export const getServerSideProps = async ({ res }) => {
  const sitemap = await createFinalSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  }
};
