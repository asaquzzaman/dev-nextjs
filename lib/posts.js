import graphqlRequest from "./graphqlRequest";

export async function getPosts( start = 0, perPage = 5 ) {
    const condition = `where: {offsetPagination: {offset: ${start}, size: ${perPage}} orderby: {field: DATE, order: DESC}}`;
    const query = {
        query: `query getPosts {
            posts( ${condition} ) {
              nodes {
                postId
                date
                slug
                title
                excerpt
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
                offsetPagination {
                  hasMore
                  hasPrevious
                  total
                }
              }
            }
          }`
    }

    const resJson = await graphqlRequest( query );
    const allPosts = resJson.data.posts;

    return allPosts;
}