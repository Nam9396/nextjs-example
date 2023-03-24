import client from "../../lib/apollo";
import { createPathsParams, GET_LASTED_POST, GET_POST_BY_GROUP, GET_POST_BY_SLUG, GET_SLUG_50 } from "../../lib/function";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import clsx from "clsx";
import SideBar from "../../components/aside/sidebar";
import Layout from "../../components/layout";
import Post from "../../components/post/post";
import PostGrid from "../../components/grid/postGrid";
import ShareBar from "../../components/aside/shareBar";
import Loading from "../../components/loading/loading";

const SLUG = ({ post, new_post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  const [ getPost, { loading, error, data } ] = useLazyQuery(GET_POST_BY_GROUP);  
  
  useEffect(() => {
    getPost({ variables: { categoryIn: post.categories.nodes[0].id } });
  }, [post]);

  return (
    <Layout>

      <div>

        <div className={clsx(
          'w-full h-fit p-2 box-col justify-center items-center'
        )}>
          <ShareBar postSlug={post.slug} />
          <div className={clsx(
            'w-full h-fit box-col justify-center items-center',
            'lg:w-[80%] lg:box-row lg:justify-between lg:items-start'
          )}>
            <Post post={post} />
            <SideBar newPost={new_post} />
          </div>

        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{`Error! ${error}`}</p>
        ) : data ? (
          <PostGrid postArray={data.posts.nodes} />
        ) : null}

      </div>      

    </Layout>
  )    
};

export default SLUG;

export const getStaticProps = async ({ params }) => {
  const response_1 = await client.query ({
    query: GET_POST_BY_SLUG,
    variables: {
      id: params.slug
    }
  });
  const response_2 = await client.query({
    query: GET_LASTED_POST
  });

  const post = response_1?.data?.post;
  const new_post = response_2?.data?.posts?.nodes;
  
  return {
    props: {
      post,
      new_post,
    }
  }
};

export const getStaticPaths = createPathsParams;

// export const getStaticPaths = async () => {
//   const response1 = await client.query({
//     query: GET_SLUG_50
//   });
//   const slug_50 = response1?.data?.posts?.nodes;
//   const paths = slug_50.map(item => ({
//     params: {slug: item.slug}
//   }));
//   return {
//     paths, 
//     fallback: true
//   }
// };