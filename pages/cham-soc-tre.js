import { GET_BE_BENH, GET_BE_KHOE, GET_SO_CAP_CUU } from "../lib/postByCate";
import Head from "next/head";
import client from "../lib/apollo";
import Layout from "../components/layout";
import HeroSection from "../components/hero/heroSection";
import PostGrid from "../components/grid/postGrid";
import data from "../lib/pageData";

const Cham_soc_tre = ({ be_khoe, be_benh, so_cap_cuu }) => {
  
  return (
    <Layout>

      <Head>
        <title>Chăm sóc trẻ</title>
        <meta name="description" content="Xử trí khi bé bị bệnh và cách chăm sóc con hàng ngày"/>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
      </Head>

      <div>

        <HeroSection data={data.chamsoctre} />

        <PostGrid postArray={be_khoe} />

        <PostGrid postArray={be_benh} />

        <PostGrid postArray={so_cap_cuu} />
        
      </div>

    </Layout>
  )
};

export default Cham_soc_tre;

export const getStaticProps = async () => {
  const response_1 = await client.query({
    query: GET_BE_KHOE
  });
  const response_2 = await client.query({
    query: GET_BE_BENH
  });
  const response_3 = await client.query({
    query: GET_SO_CAP_CUU
  });
  const be_khoe = response_1.data.posts.nodes;
  const be_benh = response_2.data.posts.nodes;
  const so_cap_cuu = response_3.data.posts.nodes;
  
  return {
    props: {
      be_khoe,
      be_benh,
      so_cap_cuu,
    }
  }
};
