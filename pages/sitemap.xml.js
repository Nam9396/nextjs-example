import { createSlugArr } from "../lib/function";


const SiteMap = () => {};

export default SiteMap;

function generateSiteMap(slugArr) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://bacsichobeyeu.com/</loc>
       </url>
       <url>
         <loc>https://bacsichobeyeu.com/phat-trien</loc>
       </url>
       <url>
         <loc>https://bacsichobeyeu.com/cham-soc-tre</loc>
       </url>
       <url>
         <loc>https://bacsichobeyeu.com/dinh-duong</loc>
       </url>
       ${slugArr
         .map((slug) => {
            return `
             <url>
               <loc>https://bacsichobeyeu.com/posts/${slug}</loc>
             </url>
            `;
          })
         .join('')}
     </urlset>
   `;
}

export const getServerSideProps = async ({ res }) => {
  const slugArr = await createSlugArr();
  const sitemap = generateSiteMap(slugArr);
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};