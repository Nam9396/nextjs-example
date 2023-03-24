import client from "../lib/apollo"
import { GET_ALL_POST } from "../lib/function";
import Head from "next/head";
import Layout from "../components/layout";
import HeroSection from "../components/hero/heroSection";
import Search from "../components/search/search";
import PostGrid from "../components/grid/postGrid";
import data from "../lib/pageData";


const Home = ({ all_post }) => {
  
  return (
    <Layout>

      <Head>
        <meta name="description" content="Website hỗ trợ cha mẹ trong quá trình chăm sóc con"/>
        <title>bacsichobeyeu</title>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
      </Head>

      <div className='box-col items-center'>

        <HeroSection data={data.gioithieu} position={'home'} />

        <PostGrid postArray={all_post} />

      </div>

    </Layout>
  )
};

export default Home;

export const getStaticProps = async () => {
  const response = await client.query({
    query: GET_ALL_POST
  });
  const all_post = response?.data?.posts?.nodes;

  return {
    props: {
      all_post
    }
  }
}
