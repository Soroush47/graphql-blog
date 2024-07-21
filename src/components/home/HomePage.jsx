import { Container, Grid, Typography } from "@mui/material";

import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";
import ScrollToTop from "../shared/ScrollToTop";
import useScrollToTop from "../../hooks/useScrollToTop";

function HomePage() {
    const isVisible = useScrollToTop();

    return (
        <Container maxWidth="lg">
            {isVisible && <ScrollToTop />}
            <Grid container spacing={2} p={3} mt={0}>
                <Grid item xs={12} md={4} lg={3} mt={4}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                        نویسنده ها
                    </Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={8} lg={9} mt={4}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                        مقالات
                    </Typography>
                    <Blogs />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;
