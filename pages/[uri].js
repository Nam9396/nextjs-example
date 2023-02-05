import css from "../styles/uri.module.css";
import Image from "next/image";
import client from "../lib/apollo";
import { GET_LASTED_POST, GET_POST_BY_GROUP, GET_POST_BY_URI, GET_URI_100, GET_URI_ABOVE_100 } from "../lib/function";
import Side_bar from "../components/side-bar";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Share from "../components/share-bar";
import PostGrid from "../components/post-gird";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Head from "next/head";
import parse from 'html-react-parser';
import Loading from "../components/loading";
import Link from "next/link";

const URI = ({ post, lasted_post }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  const [ getPost, { loading, error, data } ] = useLazyQuery(GET_POST_BY_GROUP);  
  
  useEffect(() => {
    getPost({ variables: { categoryIn: post.categories.nodes[0].id } });
  }, [post]);

  const [ link, setLink ] = useState("");

  return (
    <Layout>

      <Head>
        {parse(post.seo.fullHead)}
      </Head>

      <div className={css.uri}>

        <div className={css.content}>
          <Share />
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


          <Link
            href={link || ""}
            target="_blank" rel="noopener noreferrer"
            legacyBehavior
          >
            <article 
              className={css.article}
              dangerouslySetInnerHTML={{__html: post.content}}
              onClick={e => {
                e.preventDefault();
                const postLink = e.target.href;
                if (postLink.includes("bibohealth.com")) {
                  const internalLink = e.target.href.slice(22);
                  router.push(`${encodeURIComponent(internalLink)}`);
                } else {
                  setLink(postLink);
                }
              }}
            ></article>
          </Link>

        </div>
        
        <Side_bar lasted_post={lasted_post} />

      </div>

      {loading ? (
        <p>Loading...</p>
        // <Loading />
      ) : error ? (
        <p>{`Error! ${error}`}</p>
      ) : data ? (
        <PostGrid content={data.posts.nodes} />
      ) : null}

    </Layout>
  )    
};

export default URI;

export const getStaticProps = async ({ params }) => {
  const response_1 = await client.query ({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri
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
    query: GET_URI_100,
  });
  const response2 = await client.query({
    query: GET_URI_ABOVE_100,
  });
  const uri_100 = response1?.data?.posts?.nodes;
  const uri_above_100 = response2?.data?.posts?.nodes;
  const paths_100 = uri_100.map(item => ({
    params: {uri: item.uri}
  }));
  const paths_above_100 = uri_above_100.map(item => ({
    params: {uri: item.uri}
  }));
  const paths = paths_100.concat(paths_above_100);

  return {
    paths, 
    fallback: true
  }
};
