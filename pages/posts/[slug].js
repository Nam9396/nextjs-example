import css from "../../styles/uri.module.css";
import Image from "next/image";
import client from "../../lib/apollo";
import { GET_LASTED_POST, GET_POST_BY_GROUP, GET_POST_BY_SLUG, GET_SLUG_100, GET_SLUG_50, GET_SLUG_ABOVE_100, GET_URI_100, GET_URI_ABOVE_100, replaceUri } from "../../lib/function";
import Side_bar from "../../components/side-bar";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Share from "../../components/share-bar";
import PostGrid from "../../components/post-gird";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Head from "next/head";
import parse from 'html-react-parser';
import Loading from "../../components/loading";
import PostMeta from "../../components/postMeta";

const SLUG = ({ post, lasted_post }) => {

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

      <Head>
        <PostMeta postSeo={post.seo} /> 
      </Head>
      
      <div className={css.uri}>

        <div className={css.content}>
          <Share postSlug={post.slug} />
          <div className={css.imgBox}>
            <Image
                priority
                src={post.featuredImage.node.sourceUrl}
                alt=""
                size=""
                fill
                className={css.img}
            />  
          </div>

          <div>{post.seo.fullHead}</div>
          <div onClick={(e) => {
            e.preventDefault();
            const url = e.target.href;
            if (url.includes("bibohealth.com")) {
              const internalLink = replaceUri(url);
              router.push(`/posts/${internalLink}`);
              // window.open(`https://blog.bibohealth.com/posts/${internalLink}`,
              // '_blank', 'noopener,noreferrer'
              // );
            } else {
              window.open(url, '_blank', 'noopener,noreferrer');
            }
          }} className={css.article}>

            <article 
              dangerouslySetInnerHTML={{__html: post.content}}
            ></article>

          </div>

        </div>
        
        <Side_bar lasted_post={lasted_post} />

      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{`Error! ${error}`}</p>
      ) : data ? (
        <PostGrid content={data.posts.nodes} />
      ) : null}

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
  const lasted_post = response_2?.data?.posts?.nodes;
  
  return {
    props: {
      post,
      lasted_post
    }
  }
};

export const getStaticPaths = async () => {
  const response1 = await client.query({
    query: GET_SLUG_100
  });
  const response2 = await client.query({
    query: GET_SLUG_ABOVE_100
  });
  const slug_100 = response1?.data?.posts?.nodes;
  const slug_above_100 = response2?.data?.posts?.nodes;
  const paths_100 = slug_100.map(item => ({
    params: {slug: item.slug}
  }));
  const paths_above_100 = slug_above_100.map(item => ({
    params: {slug: item.slug}
  }));
  const paths = paths_100.concat(paths_above_100);

  return {
    paths, 
    fallback: true
  }
};

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