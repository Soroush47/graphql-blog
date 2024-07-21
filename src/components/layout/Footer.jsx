import { Typography } from "@mui/material";

function Footer() {
    return (
        <footer>
            <Typography
                component="p"
                variant="p"
                bgcolor="#f7f7f7"
                color="primary"
                p="10px"
                mt={10}
                textAlign="center"
            >
                پروژه وبلاگ با GraphQL | برنامه نویس : سروش قاسمی
            </Typography>
        </footer>
    );
}

export default Footer;
