import Head from "next/head";
import { changeCanonical, changeTitle } from "../lib/metaFunction";

const PostMeta = ({ postSeo }) => {
  return (
    <Head>
      <title>{changeTitle(postSeo.title)}</title>
      <meta name="description" content={postSeo.description} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={changeCanonical(postSeo.canonicalUrl)} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={changeTitle(postSeo.title)} />
      <meta property="og:description" content={postSeo.description} />
      <meta property="og:url" content={changeCanonical(postSeo.canonicalUrl)} />
      <meta property="og:site_name" content="bacsichobeyeu"></meta>
    </Head>
  )
};

export default PostMeta;