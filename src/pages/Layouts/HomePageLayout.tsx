import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { leftSidebarState } from "../atoms/layoutAtoms/leftSidebarAtom";
import RightSidebars from "../components/Sidebars/RightSidebars";
import TopCommunitiesSidebar from "../components/Sidebars/TopCommunitiesSidebar";

type HomePageProps = {
    children: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = ({ children }) => {
    const [leftSidebar, setLeftSidebar] = useRecoilState(leftSidebarState);

    const hideRightSidebars = useMediaQuery("(max-width:1032px)");
    const hideLeftSidebar = useMediaQuery("(max-width:1300px)");
    React.useEffect(() => {
        setLeftSidebar({ shown: false });
    }, [hideLeftSidebar]);

    return (
        <Grid
            container
            sx={{ p: "0rem" }}
            spacing={5}
            component={"main"}
            justifyContent="center"
            mx="auto"
            maxWidth={"976px"}
            pl={`${leftSidebar.shown ? "270px" : "0px"}`}
        >
            <Grid
                item
                pt="0 !important"
                width={`${
                    hideRightSidebars ? "100% !important" : "640px !important"
                }`}
                px={`${
                    hideRightSidebars ? "20px !important" : "0px !important"
                }`}
                component="section"
                mt="4rem"
                xs={"auto"}
            >
                {children}
            </Grid>
            {!hideRightSidebars && (
                <RightSidebars>
                    <TopCommunitiesSidebar />
                </RightSidebars>
            )}
        </Grid>
    );
};
export default HomePage;
