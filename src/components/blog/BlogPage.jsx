import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import { GET_POST } from "../../graphql/queries";

import Loader from "../shared/Loader";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
import ScrollToTop from "../shared/ScrollToTop";
import useScrollToTop from "../../hooks/useScrollToTop";

function BlogPage() {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_POST, {
        variables: { slug },
    });
    const navigate = useNavigate();
    const commentsRef = useRef(null);
    const isVisible = useScrollToTop();

    if (loading) return <Loader size="140" justifyContent="center" />;
    if (error) return <p>Error</p>;

    const parser = new DOMParser();

    const {
        coverPhoto,
        title,
        content,
        datePublished,
        author: { name, avatar, field, slug: authorSlug },
        comments,
    } = data.post;

    const date = new Date(datePublished);

    return (
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", mt: 7 }}>
            {isVisible && <ScrollToTop />}
            <Grid container mt={0}>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                    <Typography variant="h4" component="h2" fontWeight={700}>
                        {title}
                    </Typography>
                    <ArrowBackIosRoundedIcon
                        onClick={() => navigate(-1)}
                        sx={{ cursor: "pointer" }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={4}
                    mb={15}
                >
                    <img
                        src={coverPhoto.url}
                        width="75%"
                        style={{
                            borderRadius: "5px",
                            aspectRatio: "2/1",
                        }}
                        alt={slug}
                    />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="69%"
                        mt="3px"
                    >
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
                                commentsRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            نظرات
                            <span style={{ marginRight: "4px" }}>
                                {`(${Intl.NumberFormat("fa-IR").format(
                                    comments.length
                                )})`}
                            </span>
                        </Typography>
                        <Typography variant="caption" fontSize={14}>
                            تاریخ انتشار : {new Intl.DateTimeFormat("fa-IR").format(date)}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ mb: 10 }} display="flex" alignItems="center">
                    <Avatar
                        src={avatar.url}
                        sx={{ height: 100, width: 100, cursor: "pointer", ml: "10px" }}
                        onClick={() => navigate(`/authors/${authorSlug}`)}
                    />
                    <Box
                        component="div"
                        display="flex"
                        flexDirection="column"
                        height="max-content"
                        onClick={() => navigate(`/authors/${authorSlug}`)}
                        sx={{ cursor: "pointer" }}
                        width="max-content"
                    >
                        <Typography variant="h6" component="h6" fontWeight={600}>
                            {name}
                        </Typography>
                        <Typography variant="p" component="p" color="text.secondary">
                            {field}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mb={4}>
                    <Typography component="h3" variant="h4" fontWeight={600}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug} />
                </Grid>
                <Comments comments={comments} ref={commentsRef} />
            </Grid>
        </Container>
    );
}

export default BlogPage;
