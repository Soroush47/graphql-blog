import { Box, Button, Modal, Typography, styled } from "@mui/material";

const SuccessButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#6bdd54"),
    backgroundColor: "#6bdd54",
    "&:hover": {
        backgroundColor: "#509a41",
    },
}));

const ErrorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#de4545"),
    backgroundColor: "#de4545",
    "&:hover": {
        backgroundColor: "#a93232",
    },
}));

function CommentModal({ onClose, sendHandler }) {
    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 300,
                    height: 150,
                    color: "#ffffff",
                    bgcolor: "#515151",
                    borderRadius: 2,
                    boxShadow: "#404040 0px 0px 14px 1px",
                    p: 4,
                }}
            >
                <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    fontWeight={600}
                >
                    ارسال نظر
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    آیا از ثبت نظر خود مطمئن هستید؟
                </Typography>
                <Box component="div" display="flex" justifyContent="space-between" m={4}>
                    <SuccessButton variant="contained" onClick={sendHandler}>
                        بله
                    </SuccessButton>
                    <ErrorButton variant="contained" onClick={onClose}>
                        خیر
                    </ErrorButton>
                </Box>
            </Box>
        </Modal>
    );
}

export default CommentModal;
