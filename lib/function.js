import { gql } from "@apollo/client";
import client from "./apollo";
import { GET_AN_DAM, GET_BE_BENH, GET_BE_KHOE, GET_DAY_THI, GET_DINH_DUONG_HANG_NGAY, GET_DI_HOC, GET_RANG_SUA, GET_SO_CAP_CUU, GET_SO_SINH, GET_THUC_PHAM_BO_SUNG } from "./postByCate";

const getPostsByCategories = async() => {
  const an_dam = await client.query({ query: GET_AN_DAM });
  const dinh_duong_hang_ngay = await client.query({ query: GET_DINH_DUONG_HANG_NGAY });
  const thuc_pham_bo_sung = await client.query({ query: GET_THUC_PHAM_BO_SUNG });
  const be_benh = await client.query({ query: GET_BE_BENH });
  const be_khoe = await client.query({ query: GET_BE_KHOE });
  const so_cap_cuu = await client. query({ query: GET_SO_CAP_CUU });
  const so_sinh = await client.query({ query: GET_SO_SINH });
  const rang_sua = await client.query({ query: GET_RANG_SUA });
  const di_hoc = await client.query({ query: GET_DI_HOC });
  const day_thi = await client.query({ query: GET_DAY_THI });
  const dataArr = [
    an_dam, 
    dinh_duong_hang_ngay, 
    thuc_pham_bo_sung, 
    be_benh, 
    be_khoe, 
    so_cap_cuu,
    so_sinh,
    rang_sua, 
    di_hoc, 
    day_thi
  ];
  const postDataArr = [];
  dataArr.forEach((object) => {
    postDataArr.push(...object?.data?.posts?.nodes);
  });
  return postDataArr;
};

export const createPathsParams = async () => {
  const postDataArr = await getPostsByCategories();
  const paths = postDataArr.map((item) => ({
    params: {slug: item.slug}
  }));
  return {
    paths,
    fallback: true
  }
}

export const createSlugArr = async () => {
  const postDataArr = await getPostsByCategories();
  const slugArr = postDataArr.map((item) => item.slug);
  return slugArr;
}

export const generateSiteMap = (slugArr) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://bacsichobeyeu.com/</loc>
     </url>
     <url>
       <loc>https://bacsichobeyeu.com/phat-trien</loc>
     </url>
     <url>
       <loc>https://bacsichobeyeu.com/cham-soc-tre</loc>
     </url>
     <url>
       <loc>https://bacsichobeyeu.com/dinh-duong</loc>
     </url>
     ${slugArr
       .map((slug) => {
          return `
           <url>
             <loc>https://bacsichobeyeu.com/posts/${slug}</loc>
           </url>
          `;
        })
       .join('')}
   </urlset>
 `;
}

export const createFinalSiteMap = async() => {
  const slugArr = await createSlugArr();
  const sitemap = generateSiteMap(slugArr)
  return sitemap;
}

export const replaceUri = (string) => {
  const regex = /(https:\/\/bibohealth.com)|(phat-trien\/)|(cham-soc-tre\/)|(dinh-duong-2\/)|(dinh-duong\/)|(be-khoe\/)|(be-benh\/)|(so-cap-cuu\/)|(an-dam\/)|(dinh-duong-hang-ngay\/)|(thuc-pham-bo-sung\/)|(so-sinh-nhu-nhi\/)|(day-thi\/)|(di-hoc\/)|(rang-sua\/)|\d{2}|\d{4}|\//gi;
  let finalSlug = string.replace(regex, "");
  return finalSlug;
};

export const removeAccents = (str) => {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export const GET_SLUG_50 = gql`
  query GET_SLUG_50 {
    posts(first: 50) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        slug
      }
    }
  }
`;

export const GET_ALL_POST = gql`
  query GetAllPost($after: String = "", $before: String = "") {
    posts(first: 1000, after: $after, before: $before) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_LASTED_POST = gql`
  query GetLastedPost {
    posts(first: 10) {
      nodes {
        title
        slug
        id
      }
    }
  }
`;

export const GET_SEARCH_POST = gql`
  query SearchPost($search: String = "") {
    posts(first: 15, where: {search: $search}) {
      nodes {
        title
        slug
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($id: ID = "") {
    post(id: $id, idType: SLUG) {
      title
      slug
      content(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          id
        }
      }
      seo {
        canonicalUrl
        description
        robots
        title
      }
    }
  }
`;

export const GET_POST_BY_GROUP = gql`
  query PostsByCategories ($categoryIn: [ID] = "") {
    posts(first: 100, where: {categoryIn: $categoryIn}) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

