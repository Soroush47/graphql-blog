import { gql } from "@apollo/client";

const GET_AUTHORS = gql`
    query {
        authors {
            id
            name
            avatar {
                url
            }
            field
            description {
                html
                text
            }
            slug
            posts {
                id
                title
                coverPhoto {
                    url
                }
                datePublished
                slug
            }
        }
    }
`;

const GET_POSTS = gql`
    query {
        posts {
            id
            title
            coverPhoto {
                url
            }
            datePublished
            slug
            comments {
                id
                name
                email
                text
            }
            author {
                id
                name
                avatar {
                    url
                }
                slug
            }
        }
    }
`;

const GET_AUTHOR = gql`
    query ($slug: String!) {
        author(where: { slug: $slug }) {
            name
            avatar {
                url
            }
            field
            description {
                html
            }
            slug
            posts {
                id
                title
                coverPhoto {
                    url
                }
                slug
            }
        }
    }
`;

const GET_POST = gql`
    query ($slug: String!) {
        post(where: { slug: $slug }) {
            content {
                html
            }
            coverPhoto {
                url
            }
            datePublished
            title
            comments {
                text
                email
                name
            }
            author {
                avatar {
                    url
                }
                name
                field
                slug
            }
        }
    }
`;

export { GET_AUTHORS, GET_POSTS, GET_AUTHOR, GET_POST };
