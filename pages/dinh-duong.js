import PostGrid from "../components/post-gird";
import css from "../styles/page.module.css";
import client from "../lib/apollo";
import { GET_AN_DAM, GET_DINH_DUONG_HANG_NGAY, GET_THUC_PHAM_BO_SUNG } from "../lib/function";
import Layout from "../components/layout";
import Head from "next/head";

const Dinh_duong = ({ an_dam, dinh_duong_hang_ngay, thuc_pham_bo_sung }) => {

  return (
    <Layout>

      <Head>
        <title>Dinh dưỡng</title>
        <meta name="description" content="Ăn dặm, uống sữa, bổ sung vitamin và buổi ăn hàng ngày cho bé"/>
      </Head>

      <div className={css.outerBox}>

        <div className={css.headerBox}>
          <div className={css.header}>Dinh dưỡng</div>
          <div className={css.detail}>Ăn dặm, uống sữa, bổ sung vitamin và nhiều vấn đề thiết thực khác đang đợi bạn khám phá</div>
        </div>

        <PostGrid content={an_dam} />

        <PostGrid content={dinh_duong_hang_ngay} />

        <PostGrid content={thuc_pham_bo_sung} />
        
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
