import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import { GET_AUTHOR } from "../../graphql/queries";

import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
import ScrollToTop from "../shared/ScrollToTop";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useRef } from "react";

function AuthorPage() {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_AUTHOR, {
        variables: { slug },
    });
    const navigate = useNavigate();
    const postsRef = useRef(null);
    const isVisible = useScrollToTop();

    if (loading) return <Loader size="140" justifyContent="center" />;
    if (error) return <p>Error</p>;

    const {
        author: { avatar, name, field, description, posts },
    } = data;

    return (
        data && (
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 9,
                }}
            >
                {isVisible && <ScrollToTop />}
                <Box display="flex" justifyContent="flex-end">
                    <ArrowBackIosRoundedIcon
                        onClick={() => navigate(-1)}
                        sx={{ ml: "50px", cursor: "pointer" }}
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={3}
                    mb={7}
                >
                    <Avatar src={avatar.url} sx={{ height: 300, width: 300 }} />
                    <Typography
                        component="h3"
                        variant="h5"
                        fontWeight={700}
                        mt={3}
                        mb={2}
                    >
                        {name}
                    </Typography>
                    <Typography component="p" variant="h5" color="text.secondary" mb={2}>
                        {field}
                    </Typography>
                    <Typography
                        component="p"
                        variant="subtitle2"
                        color="primary"
                        fontWeight={600}
                        fontSize={16}
                        sx={{
                            cursor: "pointer",
                            "&:hover": {
                                color: "#132db4",
                                textShadow: "#ff9191 0px 0px 3px",
                            },
                        }}
                        onClick={() => {
                            postsRef.current.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        مقالات
                        <span style={{ marginRight: "4px" }}>
                            {`(${Intl.NumberFormat("fa-IR").format(posts.length)})`}
                        </span>
                    </Typography>
                </Box>
                <div
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
                ></div>
                <Typography
                    component="h4"
                    variant="h6"
                    fontWeight={600}
                    mt={6}
                    mb={4}
                >{`مقالات ${name}`}</Typography>
                <Grid container spacing={2} ref={postsRef}>
                    {posts.map(post => (
                        <Grid
                            item
                            key={post.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            maxWidth="296px"
                        >
                            <CardEL {...post} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    );
}

export default AuthorPage;
