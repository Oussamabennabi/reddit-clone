
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { leftSidebarState } from "../atoms/layoutAtoms/leftSidebarAtom";
import AuthModal from "../components/Modals/AuthModal";
import CreateCommunityModal from "../components/Modals/CreateCommunityModal";
import { CustomCard } from "../components/mui";
import Navbar from "../components/Navbar/Navbar";
import CommunitiesFeedSidebar from "../components/Sidebars/CommunitiesFeedSidebar";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leftSidebar, setLeftSidebar] = useRecoilState(leftSidebarState);
  const hideLeftSidebar = useMediaQuery("(max-width:1300px)");
  React.useEffect(() => {
      setLeftSidebar({ shown: false });
  }, [hideLeftSidebar, setLeftSidebar]);
    
    return (
        <>
            <AuthModal />
            <CreateCommunityModal/>
            <Navbar />
            <Box display={"flex"} justifyContent="center">
                <Box
                    mt=".1rem"
                    // pt="0 !important"
                    // mr="auto"
                    component="aside"
                    // xs={"auto"}
                >
                    <CustomCard
                        sx={{ position: "sticky !important", top: "3.1rem" }}
                    >
                        {leftSidebar.shown && <CommunitiesFeedSidebar />}
                    </CustomCard>
                </Box>

               
            {children}
            </Box>
        </>
    );
};
export default Layout;
