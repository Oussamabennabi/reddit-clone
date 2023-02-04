import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { CustomIcon, CustomMenuButton } from "../mui";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import { leftSidebarState } from "@/pages/atoms/layoutAtoms/leftSidebarAtom";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useRecoilState } from "recoil";
import React from "react";

type CommunitiesFeedContentProps = {};
export const CommunitiesFeedContent: React.FC<CommunitiesFeedContentProps> = () => {
    const [leftSidebar, setLeftSidebar] = useRecoilState(leftSidebarState);
    const hideExpandColor = useMediaQuery("(max-width:1300px)");
    return (
        <Box position={"relative"}>
           {!hideExpandColor&& <Typography
                onClick={() =>
                    setLeftSidebar((prev) => ({
                        ...prev,
                        shown: !prev.shown,
                    }))
                }
                component="div"
                sx={{ position: "absolute", right: ".3rem", top: "-.7rem" }}
            >
                <CustomIcon
                    tooltipTitle={`${
                        leftSidebar.shown ? "close Sidebar" : "expand Sidebar"
                    }`}
                    tooltipPlacment="bottom"
                >
                    {leftSidebar.shown ? (
                        <CloseFullscreenIcon sx={{ fontSize: "16px" }} />
                    ) : (
                        <OpenInFullOutlinedIcon sx={{ fontSize: "16px" }} />
                    )}
                </CustomIcon>
            </Typography>}
            <Typography
                ml="1rem"
                component={"small"}
                display="block"
                fontSize="11px"
                color="gray"
            >
                FEEDS
            </Typography>
            <CustomMenuButton text="Home" />
            <CustomMenuButton text="Popular" />

            <Typography
                ml="1rem"
                component={"small"}
                fontSize="11px"
                color="gray"
            >
                RECENT
            </Typography>

            <CustomMenuButton text="r/nextjs" />
            <CustomMenuButton text="r/torrents" />
            <CustomMenuButton text="r/facepalm" />

            <Typography
                ml="1rem"
                component={"small"}
                fontSize="11px"
                color="gray"
            >
                TOPICS
            </Typography>
            <CustomMenuButton
                text="Gaming"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Sports"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Busniss, Economics,a..."
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Crypto"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Television"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Celebrity"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="More Topics"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
        </Box>
    );
};
