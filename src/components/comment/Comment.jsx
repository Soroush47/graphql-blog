import { Avatar, Grid, Typography } from "@mui/material";

function Comment({ comment }) {

    return (
        <Grid
            item
            container
            sx={{
                border: "1px solid #cdcdcd",
                borderRadius: "4px",
                p: "4px 15px 2px 0px",
                mb: 3,
            }}
            spacing={1}
        >
            <Grid item xs={12} display="flex" alignItems="center">
                <Avatar>{comment.name[0]}</Avatar>
                <Typography component="span" variant="p" fontWeight={700} mr="8px">
                    {comment.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography component="p" varinat="p" m="2px 7px 6px 2px">
                    {comment.text}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Comment;
