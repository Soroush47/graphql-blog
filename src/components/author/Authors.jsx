import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import {
    Avatar,
    Card,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";

import { GET_AUTHORS } from "../../graphql/queries";

import Loader from "../shared/Loader";

function Authors() {
    const { loading, data, error } = useQuery(GET_AUTHORS);
    const navigate = useNavigate();

    if (loading) return <Loader size="70" justifyContent="flex-start" />;
    if (error) return <p>Error</p>;

    return (
        data && (
            <Card
                sx={{
                    boxShadow: "#cccccc 0px 2px 12px 1px",
                    borderRadius: "6px",
                    maxWidth: "280px",
                }}
            >
                <List>
                    {data.authors.map((author, index) => (
                        <Fragment key={author.id}>
                            <ListItem sx={{ width: "max-content" }}>
                                <ListItemAvatar
                                    onClick={() => navigate(`/authors/${author.slug}`)}
                                    sx={{ cursor: "pointer" }}
                                >
                                    <Avatar src={author.avatar.url} />
                                </ListItemAvatar>
                                <ListItemText
                                    onClick={() => navigate(`/authors/${author.slug}`)}
                                    sx={{ textAlign: "right", cursor: "pointer" }}
                                    primary={author.name}
                                />
                            </ListItem>
                            {index + 1 !== data.authors.length && (
                                <Divider variant="middle" sx={{ margin: "10px" }} />
                            )}
                        </Fragment>
                    ))}
                </List>
            </Card>
        )
    );
}

export default Authors;
