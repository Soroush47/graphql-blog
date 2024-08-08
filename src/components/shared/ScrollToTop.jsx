import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function ScrollToTop() {
    const showTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box position="fixed" bottom="10vh" right="5%" zIndex={1}>
            <IconButton
                sx={{
                    color: "#608ea5",
                    backgroundColor: "#e1f3ff",
                    boxShadow: "#9e9e9e4c 0 0 12px 1px",
                    "&:hover": {
                        color: "#ffffff",
                        backgroundColor: "#278ebf",
                    },
                }}
                onClick={showTop}
            >
                <KeyboardArrowUpRoundedIcon
                    sx={{
                        width: "25px",
                        height: "25px",
                        // minWidth: "10px",
                        // minHeight: "10px",
                        // maxWidth: "25px",
                        // maxHeight: "25px",
                    }}
                />
            </IconButton>
        </Box>
    );
}

export default ScrollToTop;
