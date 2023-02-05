import { authModalState } from "@/pages/atoms/temp";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { CustomTextField, PrimaryButton, SecondaryButton } from "../mui";
import DefaultModal from "./DefaultModal";
import OAuthButtons from "./OAuthButtons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
    function onLogin() {}

    function onLogout() {}
    const [modal, setModal] = useRecoilState(authModalState);

    return (
        <DefaultModal
            contentPadding={"3rem"}
            customStyles={{ width: "410px" }}
            open={modal.open}
            setOpen={(value: boolean) => {
                setModal((prev) => ({ view: prev.view, open: value }));
            }}
        >
            {/* Header */}
            <Typography
                component="h5"
                fontWeight={"bold"}
                variant="h5"
                mb=".4rem"
            >
                {modal.view === "login"
                    ? "Log In"
                    : modal.view === "signup"
                    ? "Sign Up"
                    : "Reset Password"}
            </Typography>
            <Typography
                component="small"
                fontWeight={"bold"}
                mb="1rem"
                fontSize="12px"
                sx={{
                    wordBreak: "break-all",
                }}
            >
                By continuing, you agree are setting up a Reddit account and
                agree to our User Agreement and Privacy Policy.
            </Typography>

            <OAuthButtons />

            {/* Divider */}
            <Box
                sx={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "1rem",
                    width: "100%",
                }}
            >
                <Divider sx={{ width: "100%" }}>
                    <Typography
                        fontWeight={"bold"}
                        component="small"
                        fontSize={"14px"}
                    >
                        OR
                    </Typography>
                </Divider>
            </Box>

            {/* Inputs */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                {modal.view === "login" ? (
                    <LoginFormContent />
                ) : modal.view === "signup" ? (
                    <SignupFormContent />
                ) : (
                    ""
                )}
            </Box>

            {/* Other options */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    fontWeight={"bold"}
                    component="small"
                    fontSize={"14px"}
                >
                    {modal.view === "signup"
                        ? "already a redditor"
                        : "New to Reddit?"}
                </Typography>
                {modal.view === "login" ? (
                    <SecondaryButton
                        onClick={() => {
                            setModal((prev) => ({ ...prev, view: "signup" }));
                        }}
                        sx={{
                            width: "100%",
                            color: "primary",
                            fontWeight: "bold",
                            py: ".5rem",
                        }}
                    >
                        Sign Up
                    </SecondaryButton>
                ) : modal.view === "signup" ? (
                    <SecondaryButton
                        onClick={() => {
                            setModal((prev) => ({ ...prev, view: "login" }));
                        }}
                        sx={{
                            width: "100%",
                            color: "primary",
                            fontWeight: "bold",
                            py: ".5rem",
                        }}
                    >
                        Sign In
                    </SecondaryButton>
                ) : (
                    ""
                )}
            </Box>
        </DefaultModal>
    );
};
export default AuthModal;

export const SignupFormContent = () => {
const emailRef = React.useRef<HTMLInputElement>(null);
const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    
    function handleSubmit() {
        
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".8rem",
                justifyContent: "center",
                alignItems: "flex-start",
                mb: "2rem",
                width: "100%",
            }}
        >
            <CustomTextField fullWidth required label="Username"  inputRef={usernameRef} />
            <CustomTextField fullWidth required label="Email"  inputRef={emailRef} />
            <CustomTextField fullWidth required label="Password" inputRef={passwordRef}  />

            <PrimaryButton
                onClick={handleSubmit}
                // disabled
                sx={{
                    backgroundColor: "#DD4A15",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#fd652e" },
                    py: ".5rem",
                    "&:disabled": {
                        backgroundColor: "#ffcbb8",
                        color: "grey",
                    },
                }}
            >
                Continue
            </PrimaryButton>
        </Box>
    );
};

export const LoginFormContent = () => {
    const [modal, setModal] = useRecoilState(authModalState);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "flex-start",
                mb: "2rem",
                width: "100%",
            }}
        >
            <CustomTextField
                fullWidth
                label="Username"
                inputProps={{ style: { height: "20px" } }}
            />
            <CustomTextField
                fullWidth
                label="Password"
                type="password"
                inputProps={{ style: { height: "20px" } }}
            />
            <Typography mb="1.5rem" component="small" fontSize="12px">
                Forget your <Link href="#">username</Link> or{" "}
                <Link href="#">password</Link> ?
            </Typography>
            <PrimaryButton
                onClick={() => {
                    setModal((prev) => ({ ...prev, view: "login" }));
                }}
                sx={{
                    backgroundColor: "#DD4A15",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#fd652e" },
                    py: ".5rem",
                }}
            >
                Log In
            </PrimaryButton>
        </Box>
    );
};
