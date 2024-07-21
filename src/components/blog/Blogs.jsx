import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import { GET_POSTS } from "../../graphql/queries";

import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
    const { loading, data, error } = useQuery(GET_POSTS);

    if (loading) return <Loader size="100" justifyContent="center" />;
    if (error) return <p>Error</p>;

    return (
        data && (
            <Grid container spacing={2}>
                {data.posts.map(post => (
                    <Grid item xs={12} sm={6} lg={4} key={post.id}>
                        <CardEL {...post} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Blogs;
