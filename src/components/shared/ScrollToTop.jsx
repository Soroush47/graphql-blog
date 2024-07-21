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
        <Box position="fixed" top="83%" left="94%">
            <IconButton
                sx={{
                    color: "#7986a5",
                    backgroundColor: "#e1ebff",
                    "&:hover": {
                        color: "#ffffff",
                        backgroundColor: "#427bff",
                    },
                }}
                onClick={showTop}
            >
                <KeyboardArrowUpRoundedIcon
                    sx={{
                        width: "2vw",
                        height: "2vw",
                        minWidth: "10px",
                        minHeight: "10px",
                        maxWidth: "25px",
                        maxHeight: "25px",
                    }}
                />
            </IconButton>
        </Box>
    );
}

export default ScrollToTop;
