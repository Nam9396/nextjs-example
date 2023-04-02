import Head from "next/head";
import { changeCanonical, changeTitle } from "../../lib/metaFunction";

const PostMeta = ({ post }) => {
  return (
    <Head>
      <title>{changeTitle(post?.seo?.title)}</title>
      <meta name="description" content={post?.seo?.description} />
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={changeCanonical(post?.seo?.canonicalUrl)} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={changeTitle(post?.seo?.title)} />
      <meta property="og:description" content={post?.seo?.description} />
      <meta property="og:url" content={changeCanonical(post?.seo?.canonicalUrl)} />
      <meta property="og:image" content={post?.featuredImage?.node?.sourceUrl} />
      <meta property="og:site_name" content="bacsichobeyeu"></meta>
    </Head>
  )
};

export default PostMeta;