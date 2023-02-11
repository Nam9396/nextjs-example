import css from "../styles/home.module.css"
import Layout from "../components/layout";
import client from "../lib/apollo"
import { GET_ALL_POST } from "../lib/function";
import PostGrid from "../components/post-gird";
import Image from "next/image";
import Search from "../components/search";
import Head from "next/head";

const Home = ({ all_post }) => {
  
  return (
    <Layout>

      <Head>
        <meta name="description" content="Website hỗ trợ cha mẹ trong quá trình chăm sóc con"/>
        <title>BiboHealth</title>
      </Head>

      <div className={css.home}>

        <div className={css.authorBox}>
          <div className={css.imgBox}>
            <Image
              src="https://bibohealth.com/wp-content/uploads/2022/12/MG_4252-scaled-e1672466574925-1024x983.jpg"
              alt=""
              fill
              priority
              className={css.img}
            />
          </div>
          <div className={css.authorDetail}>Nguyễn Thành Nam</div>
          <div className={css.authorDetail}>Bác sĩ nhi khoa</div>
        </div>

        <div className={css.introBox}>
          Chào mừng bạn đến với BiboHealth, trang web về chăm sóc sức khoẻ trẻ em dành cho các bậc cha mẹ. Thông tin y khoa tại đây được xây dựng bởi các bác sĩ nhi khoa và dược sĩ
        </div>

        <Search />

        <PostGrid content={all_post} />

        <div className={css.infoBox}>
          <div className={css.infoCard}>
            <div className={css.infoHeader}>BiboHealth làm gì</div>
            <div className={css.divider}></div>
            <div className={css.infoDetail}>BiboHealth được tạo ra với một mục tiêu đơn giản: giúp các bậc cha mẹ có thể tìm được câu trả lời cho các thắc mắc trong quá trình nuôi con</div>
          </div>
          <div className={css.infoCard}>
            <div className={css.infoHeader}>Nguồn tài liệu tin cậy</div>
            <div className={css.divider}></div>
            <div className={css.infoDetail}>Bài viết được tổng hợp từ các giáo trình nhi khoa Đại học, Hội Nhi khoa Việt Nam, Học viện Nhi khoa Hoa Kỳ (AAP) và các website như healthychildren.org, uptodate.com, nhs.uk</div>
          </div>
          <div className={css.infoCard}>
            <div className={css.infoHeader}>Tóm tắt dễ nhớ</div>
            <div className={css.divider}></div>
            <div className={css.infoDetail}>Mở đầu các bài viết đều có phần tóm tắt (key takeaways). Đây là phần quan trọng và đáng chú ý với bạn đọc</div>
          </div>
          <div className={css.infoCard}>
            <div className={css.infoHeader}>Chuỗi bài viết</div>
            <div className={css.divider}></div>
            <div className={css.infoDetail}>Chúng tôi tạo các chuỗi bài viết xung quanh một chủ đề, giúp bạn đọc hiểu rõ và tìm được câu trả lời mong muốn</div>
          </div>
        </div>

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
