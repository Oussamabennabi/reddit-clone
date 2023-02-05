import { Avatar, Box, Modal, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {
    CustomAvatar,
    CustomExpandButton,
    CustomIcon,
    CustomMenu,
    PrimaryButton,
    SecondaryButton,
} from "../mui";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { User } from "firebase/auth";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { Divider } from "@mui/material";
import UserDropDownMenu from "./UserDropDownMenu";
import { authModalState } from "@/pages/atoms/temp";
import { useRecoilState } from "recoil";
import CreateMenu from "./CreateMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/pages/firebase/firebase";

type NavbarRightContentProps = {};

const NavbarRightContent: React.FC<NavbarRightContentProps> = () => {
    const hideUsername = useMediaQuery("(min-width:1230px)");
    const hideRightIcons = useMediaQuery("(min-width:854px)");
    const hideAllIcons = useMediaQuery("(min-width:600px)");
    const [modal, setModal] = useRecoilState(authModalState);
    const [user] = useAuthState(auth)
    console.log(user);
    
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElCreate, setAnchorElCreate] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenCreateMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElCreate(event.currentTarget);
    };

    const handleCloseCreateMenu = () => {
        setAnchorElCreate(null);
    };
    React.useEffect(() => {
        setAnchorElCreate(null);
        setAnchorElUser(null);
        
    },[user])
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
                        onClick={handleOpenCreateMenu}
                    >
                        <AddOutlinedIcon />
                    </CustomIcon>
                    {user &&
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
                        anchorEl={anchorElCreate}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElCreate)}
                        onClose={handleCloseCreateMenu}
                    >
                        <CreateMenu />
                    </CustomMenu>
                    }

                    <CustomIcon
                        tooltipTitle="Advertise"
                        tooltipPlacment="bottom"
                    >
                        <CampaignOutlinedIcon />
                    </CustomIcon>
                </>
            )}
            {/* logedIn State  */}
            {user ?
            <CustomExpandButton
                onClick={handleOpenUserMenu}
                leftIcon={<CustomAvatar imgSrc={user?.photoURL||"" } />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            >
                <Typography component="small" fontSize={"12px"}>
                    {hideUsername && user?.displayName?.split(' ')[0]}
                </Typography>
            </CustomExpandButton>
            
                :
            <Box display="flex" gap=".4rem">
                <SecondaryButton
                    onClick={() => {
                        setModal((prev) => ({ open: true, view: "signup" }));
                    }}
                >
                    Sign Up
                </SecondaryButton>
                <PrimaryButton
                    onClick={() => {
                        setModal((prev) => ({ open: true, view: "login" }));
                    }}
                >
                    Log In
                </PrimaryButton>
            </Box>
            }
            {user &&
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
            }
        </Box>
    );
};
export default NavbarRightContent;
