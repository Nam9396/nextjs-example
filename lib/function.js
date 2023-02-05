import { gql } from "@apollo/client";

export const removeAccents = (str) => {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export const GET_URI_100 = gql`
  query GET_URI_100 {
    posts(first: 100) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        uri
      }
    }
  }
`;

export const GET_URI_ABOVE_100 = gql`
  query GET_URI_ABOVE_100 {
    posts(first: 100, after: "YXJyYXljb25uZWN0aW9uOjQzMDk=") {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        uri
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
        uri
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

export const GET_SEARCH_POST = gql`
  query SearchPost($search: String = "") {
    posts(first: 15, where: {search: $search}) {
      nodes {
        title
        uri
      }
    }
  }
`;

export const GET_POST_BY_URI = gql`
  query GetPostByURI($id: ID = "") {
    post(id: $id, idType: URI) {
      title
      uri
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
        title
        description
        fullHead
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
        uri
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
  query GetAllPost($after: String = "", $before: String = "") {
    posts(first: 10, after: $after, before: $before) {
      nodes {
        title
        uri
        id
      }
    }
  }
`;

export const GET_AN_DAM = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybToxMDU="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_DINH_DUONG_HANG_NGAY = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybToxMDY="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_THUC_PHAM_BO_SUNG = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybToxMDc="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_BE_BENH = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo5NQ=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_BE_KHOE = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo5NA=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_SO_CAP_CUU = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo5Mw=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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


export const GET_SO_SINH = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo4Nw=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_RANG_SUA = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo4OA=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_DI_HOC = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo4OQ=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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

export const GET_DAY_THI = gql`
query AnDam($before: String = "", $after: String = "") {
  posts(
    where: {categoryIn: "dGVybTo5MA=="}
    first: 100
    after: $after
    before: $before
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    nodes {
      title
      uri
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
