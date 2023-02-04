import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
// MUI
import SearchIcon from "@mui/icons-material/Search";
import {
    CustomExpandButton,
    CustomIcon,
    CustomMenu,
    Logo,
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "../mui";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { CommunitiesFeedContent } from "../Sidebars/CommunitiesFeedContent";
import { useRecoilState } from "recoil";
import { leftSidebarState } from "@/pages/atoms/layoutAtoms/leftSidebarAtom";
type NavbarLeftContentProps = {
};

const NavbarLeftContent: React.FC<NavbarLeftContentProps> = () => {
    const [leftSidebar, _] = useRecoilState(leftSidebarState);


    const hideHome = useMediaQuery("(min-width:1000px)");

    const [anchorElHome, setAnchorElHome] = useState<null | HTMLElement>(null);

    const handleOpenHomeMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElHome(event.currentTarget);
    };

    const handleCloseHomeMenu = () => {
        setAnchorElHome(null);
    };

    useEffect(() => {
        setAnchorElHome(null)
    },[leftSidebar.shown])
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Typography sx={{ mr: `${hideHome && ".8rem"}` }} component="span">
                <Logo />
            </Typography>
            <CustomExpandButton
                onClick={!leftSidebar.shown ? handleOpenHomeMenu : undefined}
                width={`${hideHome && "270px"}`}
                leftIcon={<HomeIcon />}
                rightIcon={<ExpandMoreOutlinedIcon />}
            >
                <Typography fontSize="14px">{hideHome && "Home"}</Typography>
            </CustomExpandButton>
            <CustomMenu
                sx={{
                    mt: "42px",
                }}
                PaperProps={{
                    sx: {
                        width: "270px",
                        py: ".4rem",
                        outline: "1px solid gray",
                    },
                }}
                id="menu-appbar"
                anchorEl={anchorElHome}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElHome)}
                onClose={handleCloseHomeMenu}
            >
                <CommunitiesFeedContent />
            </CustomMenu>
            <Search
                sx={{
                    flexGrow: "1",
                    marginRight: "16px",
                    marginLeft: "16px !important",
                }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    fullWidth
                    placeholder="Search Reddit"
                    inputProps={{ "aria-label": "search" }}
                />
            </Search>
        </Box>
    );
};
export default NavbarLeftContent;
