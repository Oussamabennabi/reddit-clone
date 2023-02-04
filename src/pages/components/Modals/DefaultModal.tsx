import React from 'react';
import { Box, Modal, Button, Typography, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import { Theme } from '@emotion/react/';
import { modalStyles } from '../mui';

type DefaultModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    children: React.ReactNode;
    customStyles?: SxProps<Theme> | undefined;
    headerTitle?: string;
    contentPadding:string
};

const DefaultModal: React.FC<DefaultModalProps> = ({
    open,
    setOpen,
    children,
    customStyles,
    headerTitle,
    contentPadding
}) => {
    return (
        <Modal
            sx={{
                ...modalStyles.modal,
                ...customStyles,
            }}
            open={open}
            BackdropProps={{
                timeout: 300,
            }}
            closeAfterTransition
            onClose={() => setOpen(false)}
        >
            <Fade in={open}>
                <Box sx={{ ...modalStyles.modalContainer }}>
                    <Box>
                        {/* modal header */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: "0rem 1rem",
                            }}
                        >
                            {headerTitle && (
                                <Typography>{headerTitle}</Typography>
                            )}
                            <Button
                                onClick={() => setOpen(false)}
                                variant="text"
                                sx={{
                                    p: 0,
                                    width: 40,
                                    minWidth: 0,
                                    height: 40,
                                    borderRadius: "50%",
                                    ml: "auto",
                                }}
                            >
                                <CloseIcon
                                    sx={{ p: 0, width: 25, height: 25 }}
                                />
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                ...modalStyles.modalContent,
                                p: contentPadding,
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
export default DefaultModal;

