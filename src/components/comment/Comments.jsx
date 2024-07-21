import { forwardRef } from "react";
import { Grid, Typography } from "@mui/material";

import Comment from "../comment/Comment";

const Comments = forwardRef(function Comments({ comments }, ref) {
    // console.log({ comments });
    // console.log({ ref });
    return (
        <Grid
            item
            container
            xs={12}
            sx={{
                boxShadow: "#d4d4d4 0px 2px 12px 2px",
                borderRadius: "10px",
                mt: 10,
                p: 3,
            }}
            ref={ref}
        >
            <Grid item xs={12} sx={{ mb: 3 }}>
                <Typography
                    component="h3"
                    variant="h6"
                    color="primary"
                    fontWeight={700}
                    width="100%"
                >
                   نظرات
                </Typography>
            </Grid>
            {comments.map((comment, index) => (
                <Comment comment={comment} key={index} />
            ))}
        </Grid>
    );
});

export default Comments;
