import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import TopCommunities from "../Communities/TopCommunities";
import { CustomCard } from "../mui";

type TopCommunitiesSidebarProps = {};

const TopCommunitiesSidebar: React.FC<TopCommunitiesSidebarProps> = () => {
    return (
        <CustomCard sx={{ width: "312px", position: "sticky", top: "72px",overflow:"hidden" }}>
            <Typography
                fontWeight={"bold"}
                textAlign="left"
                mb="1rem"
                color="white"
                component={"h4"}
                sx={{ backgroundColor: "#fc471e",p:"1rem .8rem" }}
            >
                Top Communities
            </Typography>
            <Box
                sx={{
                    p: ".6rem",
                }}
            >
                <TopCommunities />
            </Box>
        </CustomCard>
    );
};
export default TopCommunitiesSidebar;
