import React from "react";
//  MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import NavbarLeftContent from "./NavbarLeftContent";
import NavbarRightContent from "./NavbarRightContent";



type NavbarProps = {
};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: "48px",
                display: "flex",
            }}
        >
            <AppBar
                sx={{
                    height: "48px",
                    backgroundColor: "background.paper",
                    padding: "3px 20px",
                    display: "flex",
                    backgroundImage: "none",
                    flexDirection: "row",
                }}
                position="fixed"
            >
                <NavbarLeftContent
                  
                />
                <NavbarRightContent />
            </AppBar>
        </Box>
    );
};
export default Navbar;
