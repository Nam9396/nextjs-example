import { GET_AN_DAM, GET_DINH_DUONG_HANG_NGAY, GET_THUC_PHAM_BO_SUNG } from "../lib/postByCate";
import Head from "next/head";
import client from "../lib/apollo";
import Layout from "../components/layout";
import HeroSection from "../components/hero/heroSection";
import PostGrid from "../components/grid/postGrid";
import data from "../lib/pageData";

const Dinh_duong = ({ an_dam, dinh_duong_hang_ngay, thuc_pham_bo_sung }) => {

  return (
    <Layout>

      <Head>
        <title>Dinh dưỡng</title>
        <meta name="description" content="Ăn dặm, uống sữa, bổ sung vitamin và buổi ăn hàng ngày cho bé"/>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
      </Head>

      <div>

        <HeroSection data={data.dinhduong} />

        <PostGrid postArray={an_dam} />

        <PostGrid postArray={dinh_duong_hang_ngay} />

        <PostGrid postArray={thuc_pham_bo_sung} />
        
      </div>

    </Layout>
  )
};

export default Dinh_duong;

export const getStaticProps = async () => {
  const response_1 = await client.query({
    query: GET_AN_DAM
  });
  const response_2 = await client.query({
    query: GET_DINH_DUONG_HANG_NGAY
  });
  const response_3 = await client.query({
    query: GET_THUC_PHAM_BO_SUNG
  });
  const an_dam = response_1.data.posts.nodes;
  const dinh_duong_hang_ngay = response_2.data.posts.nodes;
  const thuc_pham_bo_sung = response_3.data.posts.nodes;
  
  return {
    props: {
      an_dam,
      dinh_duong_hang_ngay,
      thuc_pham_bo_sung,
    }
  }
};
