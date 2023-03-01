import css from "../../styles/uri.module.css";
import Image from "next/image";
import client from "../../lib/apollo";
import { createPathsParams, GET_LASTED_POST, GET_POST_BY_GROUP, GET_POST_BY_SLUG, GET_SLUG_50, replaceUri, getPostsByCategories } from "../../lib/function";
import Side_bar from "../../components/side-bar";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Share from "../../components/share-bar";
import PostGrid from "../../components/post-gird";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
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

      <PostMeta postSeo={post.seo} /> 
      
      <div className={css.slug}>

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
              // window.open(`https://bacsichobeyeu.com/posts/${internalLink}`,
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
      lasted_post,
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