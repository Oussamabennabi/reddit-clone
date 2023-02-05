import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { auth } from "@/pages/firebase/firebase";
import {
    useSignInWithGoogle,
    useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import LoadingButton from "@mui/lab/LoadingButton";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
    const [signInWithGoogle, _, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, __, facebookLoading, facebookError] =
        useSignInWithFacebook(auth);

    return (
        <Box display="flex" flexDirection={"column"} my="1rem" gap=".7rem">
            <LoadingButton
                onClick={() => signInWithGoogle()}
                loading={googleLoading}
                sx={{
                    borderRadius: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    width: "100%",
                    outline: "1px solid grey",
                    p: ".3rem .4rem",
                }}
            >
                <Box component={"img"} mr="auto" src="images/google.svg" />
                <Typography mr="auto" fontWeight={"bold"} fontSize="">
                    Continue With Google
                </Typography>
            </LoadingButton>
            <LoadingButton
                onClick={() => signInWithFacebook()}
                loading={facebookLoading}
                sx={{
                    borderRadius: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    width: "100%",
                    outline: "1px solid grey",
                    p: ".3rem .4rem",
                }}
            >
                <FacebookRoundedIcon  sx={{ mr: "auto",color:"#1976D2" }}  />
                <Typography mr="auto" fontWeight={"bold"} fontSize="">
                    Continue With Facebook
                </Typography>
            </LoadingButton>
            {/* errors */}
            <Typography>{googleError?.message}</Typography>
            <Typography>{facebookError?.message}</Typography>
        </Box>
    );
};
export default OAuthButtons;
