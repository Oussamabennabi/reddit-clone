import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CustomAvatar, CustomIcon, SecondaryButton } from "../mui";
import NotificationsIcon from "@mui/icons-material/Notifications";
type CommunityInfoBarProps = {};

const CommunityInfoBar: React.FC<CommunityInfoBarProps> = () => {
    const hideRightSidebars = useMediaQuery("(max-width:1032px)");

    return (
        <Box>
            <Box
                component="img"
                width="100%"
                height="100%"
                sx={{ objectFit: "contain" }}
                maxHeight="208px"
                src="https://i.pinimg.com/564x/57/a3/78/57a378c88099a6366e5bff1b9d5f125d.jpg"
            />

            <Box width="100%" sx={{ backgroundColor: "background.paper" }}>
                <Box
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems="flex-start"
                    gap="1rem"
                    mx="auto"
                    width="100%"
                    px={`${hideRightSidebars && "1.3rem"}`}
                    maxWidth={"976px"}
                    py=".5rem"
                    flexWrap={"wrap"}
                >
                    <CustomAvatar
                        imgSrc="#"
                        sx={{
                            borderRadius: "10rem",
                            width: "72px",
                            height: "72px",
                            marginTop: "-1.5rem",
                        }}
                    />

                    <Box display="flex" flexDirection={"column"}>
                        <Typography
                            component={"h4"}
                            fontSize="28px"
                            variant="h4"
                            mr=".4rem"
                            fontWeight={"bold"}
                        >
                            Announcements
                        </Typography>
                        <Typography
                            component="small"
                            fontSize="14px"
                            color="GrayText"
                        >
                            r/announcement
                        </Typography>
                    </Box>

                    <Box display={"flex"} gap=".5rem">
                        <SecondaryButton
                            sx={{
                                backgroundColor: "#fc471e",
                                width: "100%",
                                color: "white",
                                fontWeight: "bold",
                                outline: "none",
                                "&:hover": { backgroundColor: "#fd652e" },
                                p: ".2rem 1.2rem ",
                            }}
                        >
                            Joined
                        </SecondaryButton>

                        <CustomIcon
                            sx={{
                                outline: "1px solid GrayText",
                                borderRadius: "10rem",
                                color: "#fc471e",
                            }}
                            tooltipTitle="notify me"
                            tooltipPlacment="top"
                        >
                            <NotificationsIcon />
                        </CustomIcon>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default CommunityInfoBar;
