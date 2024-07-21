import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="h1"
                            fontWeight="bold"
                            flex={1}
                        >
                            وبلاگ من
                        </Typography>
                        <BookIcon
                            onClick={() => navigate("/")}
                            sx={{ cursor: "pointer" }}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Header;
