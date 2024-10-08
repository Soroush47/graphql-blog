import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
    mutation ($name: String!, $email: String!, $text: String!, $slug: String!) {
        createComment(
            data: {
                name: $name
                email: $email
                text: $text
                post: { connect: { slug: $slug } }
            }
        ) {
            id
            name
            email
            text
            post {
                title
            }
        }
    }
`;

export { CREATE_COMMENT };
