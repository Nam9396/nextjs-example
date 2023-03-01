import { gql } from "@apollo/client";
import client from "./apollo";


export const GET_AN_DAM = gql`
query an_dam {
  posts(
    where: {categoryIn: "dGVybToxMDU="}
    first: 100
  ) {
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

export const GET_THUC_PHAM_BO_SUNG = gql`
query thuc_pham_bo_sung {
  posts(
    where: {categoryIn: "dGVybToxMDc="}
    first: 100
  ) {
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

export const GET_DINH_DUONG_HANG_NGAY = gql`
query dinh_duong_hang_ngay {
  posts(
    where: {categoryIn: "dGVybToxMDY="}
    first: 100
  ) {
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

export const GET_BE_BENH = gql`
query be_benh {
  posts(
    where: {categoryIn: "dGVybTo5NQ=="}
    first: 100
  ) {
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

export const GET_BE_KHOE = gql`
query be_khoe {
  posts(
    where: {categoryIn: "dGVybTo5NA=="}
    first: 100
  ) {
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

export const GET_SO_CAP_CUU = gql`
query so_cap_cuu {
  posts(
    where: {categoryIn: "dGVybTo5Mw=="}
    first: 100
  ) {
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


export const GET_SO_SINH = gql`
query so_sinh {
  posts(
    where: {categoryIn: "dGVybTo4Nw=="}
    first: 100
  ) {
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

export const GET_RANG_SUA = gql`
query rang_sua {
  posts(
    where: {categoryIn: "dGVybTo4OA=="}
    first: 100
  ) {
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

export const GET_DI_HOC = gql`
query di_hoc {
  posts(
    where: {categoryIn: "dGVybTo4OQ=="}
    first: 100
  ) {
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

export const GET_DAY_THI = gql`
query day_thi {
  posts(
    where: {categoryIn: "dGVybTo5MA=="}
    first: 100
  ) {
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
