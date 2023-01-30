import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {
    CustomAvatar,
    CustomExpandButton,
    CustomIcon,
    CustomMenu,
} from "../mui";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { Divider } from "@mui/material";
import UserDropDownMenu from "./UserDropDownMenu";

type NavbarRightContentProps = {};

const NavbarRightContent: React.FC<NavbarRightContentProps> = () => {
    const hideUsername = useMediaQuery("(min-width:1230px)");
    const hideRightIcons = useMediaQuery("(min-width:854px)");
    const hideAllIcons = useMediaQuery("(min-width:600px)");

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 0,
                alignItems: "center",
                marginLeft: "auto",
                gap: ".3rem",
            }}
        >
            {hideRightIcons && (
                <>
                    <CustomIcon tooltipTitle="Popular" tooltipPlacment="bottom">
                        <NorthEastIcon />
                    </CustomIcon>

                    <CustomIcon tooltipTitle="Coin" tooltipPlacment="bottom">
                        <CopyrightOutlinedIcon />
                    </CustomIcon>

                    <CustomIcon
                        tooltipTitle="Happening Now"
                        tooltipPlacment="bottom"
                    >
                        <WhatshotOutlinedIcon />
                    </CustomIcon>
                </>
            )}
            <Divider
                sx={{ marginInline: `${hideRightIcons && ".5rem"}` }}
                orientation="vertical"
            />

            {hideAllIcons && (
                <>
                    <CustomIcon tooltipTitle="Chat" tooltipPlacment="bottom">
                        <TextsmsOutlinedIcon />
                    </CustomIcon>

                    <CustomIcon
                        tooltipTitle="Notifications"
                        tooltipPlacment="bottom"
                    >
                        <NotificationsOutlinedIcon />
                    </CustomIcon>

                    <CustomIcon
                        tooltipTitle="Create Post"
                        tooltipPlacment="bottom"
                    >
                        <AddOutlinedIcon />
                    </CustomIcon>

                    <CustomIcon
                        tooltipTitle="Advertise"
                        tooltipPlacment="bottom"
                    >
                        <CampaignOutlinedIcon />
                    </CustomIcon>
                </>
            )}
            <CustomExpandButton
                onClick={handleOpenUserMenu}
                leftIcon={<CustomAvatar imgSrc="jj" />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            >
                <Typography component="small" fontSize={"12px"}>
                    {hideUsername && "bennabi@gmail.com"}
                </Typography>
            </CustomExpandButton>
            <CustomMenu
                sx={{
                    mt: "39px",
                }}
                PaperProps={{
                    sx: {
                        width: "252px",

                        outline: "1px solid gray",
                    },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <UserDropDownMenu />
            </CustomMenu>
        </Box>
    );
};
export default NavbarRightContent;
