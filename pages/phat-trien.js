import { GET_DAY_THI, GET_DI_HOC, GET_RANG_SUA, GET_SO_SINH } from "../lib/postByCate";
import Head from "next/head";
import client from "../lib/apollo";
import Layout from "../components/layout";
import HeroSection from "../components/hero/heroSection";
import PostGrid from "../components/grid/postGrid";
import data from "../lib/pageData";

const Phat_trien = ({ so_sinh, rang_sua, di_hoc, day_thi }) => {
  
  return (
    <Layout>

      <Head>
        <title>Phát triển</title>
        <meta name="description" content="Theo dõi phát triển thể chất và tinh thần của bé yêu"/>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
      </Head>

      <div>

        <HeroSection data={data.phattrien} />

        <PostGrid postArray={so_sinh} />

        <PostGrid postArray={rang_sua} />

        <PostGrid postArray={di_hoc} />

        <PostGrid postArray={day_thi} />
        
      </div>

    </Layout>
  )
};

export default Phat_trien;

export const getStaticProps = async () => {
  const response_1 = await client.query({
    query: GET_SO_SINH
  });
  const response_2 = await client.query({
    query: GET_RANG_SUA
  });
  const response_3 = await client.query({
    query: GET_DI_HOC
  });
  const response_4 = await client.query({
    query: GET_DAY_THI
  });
  const so_sinh= response_1.data.posts.nodes;
  const rang_sua = response_2.data.posts.nodes;
  const di_hoc = response_3.data.posts.nodes;
  const day_thi = response_4.data.posts.nodes;
  
  return {
    props: {
      so_sinh,
      rang_sua,
      di_hoc,
      day_thi
    }
  }
};
