import { useEffect, useState } from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";

import { useMutation } from "@apollo/client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CREATE_COMMENT } from "../../graphql/mutations";
import CommentModal from "./CommentModal";

function CommentForm({ slug }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // const nameInput = useRef(null);
    // const emailInput = useRef(null);
    // const textInput = useRef(null);

    const [createComment, { loading, data, error }] = useMutation(CREATE_COMMENT);

    // let name, email, text;

    // if (nameInput.current) {
    //     name = nameInput.current.lastChild.children[0].value;
    //     email = emailInput.current.lastChild.children[0].value;
    //     text = textInput.current.lastChild.children[0].value;
    // }

    // console.log({ loading, data });

    const sendHandler = () => {
        handleClose();
        setShowSuccessToast(true);
        createComment({
            variables: {
                name,
                email,
                text,
                slug,
            },
        });
    };

    const handleOpen = () => {
        // if (nameInput.current) {
        //     name = nameInput.current.lastChild.children[0].value;
        //     email = emailInput.current.lastChild.children[0].value;
        //     text = textInput.current.lastChild.children[0].value;
        // }

        if (name && email && text) {
            setOpen(true);
        } else if (!name) {
            toast.error("لطفا نام کاربری خود را وارد کنید", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else if (!email) {
            toast.error("لطفا ایمیل خود را وارد کنید", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            toast.error("لطفا متن نظر خود را وارد کنید", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (data && showSuccessToast) {
        console.log("wrong");
        toast.success("با موفقیت ثبت شد", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
        setName("");
        setEmail("");
        setText("");
        setShowSuccessToast(false);
        // nameInput.current.lastChild.children[0].value = "";
        // emailInput.current.lastChild.children[0].value = "";
        // textInput.current.lastChild.children[0].value = "";
        // console.log(nameInput);
    }

    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         console.log("top: ", window.screenTop);
    //     }, 2000);

    //     return () => {
    //         clearTimeout(timeOut);
    //     };
    // }, [window.screenTop]);

    return (
        <Grid
            container
            sx={{
                boxShadow: "#d4d4d4 0px 2px 12px 2px",
                borderRadius: 4,
                p: 2,
                mt: 4,
            }}
        >
            <Grid item xs={12}>
                <Typography
                    component="h3"
                    variant="h6"
                    color="primary"
                    fontWeight={700}
                    width="100%"
                >
                    ارسال نظر
                </Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    // classes={{ direction: "rtl" }}
                    // ref={nameInput}
                    value={name}
                    label="نام کاربری"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    // ref={emailInput}
                    value={email}
                    label="ایمیل"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    // ref={textInput}
                    value={text}
                    label="متن نظر"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onChange={e => setText(e.target.value)}
                    multiline
                    minRows={5}
                    maxRows={10}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                {loading ? (
                    <Button variant="contained" disabled>
                        درحال ارسال
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleOpen}>
                        ارسال
                    </Button>
                )}
                {open && <CommentModal onClose={handleClose} sendHandler={sendHandler} />}
            </Grid>
            <ToastContainer rtl />
        </Grid>
    );
}
export default CommentForm;
