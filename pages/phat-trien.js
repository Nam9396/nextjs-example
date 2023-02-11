import PostGrid from "../components/post-gird";
import css from "../styles/page.module.css";
import client from "../lib/apollo";
import Layout from "../components/layout";
import { GET_DAY_THI, GET_DI_HOC, GET_RANG_SUA, GET_SO_SINH } from "../lib/function";
import Head from "next/head";

const Phat_trien = ({ so_sinh, rang_sua, di_hoc, day_thi }) => {
  
  return (
    <Layout>

      <Head>
        <title>Phát triển</title>
        <meta name="description" content="Theo dõi phát triển thể chất và tinh thần của bé yêu"/>
      </Head>

      <div className={css.outerBox}>

        <div className={css.headerBox}>
          <div className={css.header}>Phát triển</div>
          <div className={css.detail}>Con bạn có phát triển thể chất, vận động, tinh thần đúng với lứa tuổi ?</div>
        </div>

        <PostGrid content={so_sinh} />

        <PostGrid content={rang_sua} />

        <PostGrid content={di_hoc} />

        <PostGrid content={day_thi} />
        
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
