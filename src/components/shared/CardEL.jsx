import { useNavigate } from "react-router-dom";

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
} from "@mui/material";

function CardEL({ author, coverPhoto, title, slug }) {
    const navigate = useNavigate();

    // console.log({ coverPhoto: coverPhoto.url });

    return (
        <Card
            sx={{
                maxWidth: 280,
                boxShadow: "#d4d4d4 0px 1px 12px 2px ",
                borderRadius: "6px",
            }}
        >
            {author && (
                <CardHeader
                    sx={{ padding: "12px 0px" }}
                    avatar={
                        <Avatar
                            src={author.avatar.url}
                            sx={{ marginLeft: 1, marginRight: "0px" }}
                        />
                    }
                    title={
                        <Typography component="p" variant="p" color="text.secondary">
                            {author.name}
                        </Typography>
                    }
                />
            )}
            <CardMedia
                component="img"
                height="140"
                image={coverPhoto.url}
                alt={title}
                sx={{ objectFit: "fill" }}
            />
            <CardContent>
                <Typography
                    component="h3"
                    variant="h7"
                    color="text.primary"
                    fontWeight={600}
                >
                    {title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ margin: "10px" }} />
            <CardActions>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "10px",
                        padding: "3px 0px 0px",
                        width: "100%",
                    }}
                    onClick={() => navigate(`/blogs/${slug}`)}
                >
                    مطالعه مقاله
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardEL;
