import graphqlRequest from "./graphqlRequest";

export async function getPost( postId ) {
    const query = {
        query: `query getPost {
            post(id: "${postId}", idType: DATABASE_ID) {
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
                previous {
                    postId
                }
                next {
                    postId
                }
            }
        }`
    }

    const resJson = await graphqlRequest( query );
    const post = resJson.data.post;

    return post;
}