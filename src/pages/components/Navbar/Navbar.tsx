import React from "react";
//  MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import NavbarLeftContent from "./NavbarLeftContent";
import NavbarRightContent from "./NavbarRightContent";



type NavbarProps = {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ showSidebar, setShowSidebar }) => {
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
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
                <NavbarRightContent />
            </AppBar>
        </Box>
    );
};
export default Navbar;
