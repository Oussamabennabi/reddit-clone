import { Box, Button } from "@mui/material";
import React from "react";
import { CommunitiesFeedContent } from "./CommunitiesFeedContent";

type CommunitiesFeedSidebarProps = {
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    showSidebar:boolean
};

const CommunitiesFeedSidebar: React.FC<CommunitiesFeedSidebarProps> = ({
    setShowSidebar,
    showSidebar,
}) => {

    return (

            <Box
                sx={{
                    width: "270px",
                    backgroundColor: "background.paper",
                    py: "1rem",
                    mt: ".5rem",
                    height: "93.5vh",
                    // overflowY:"scroll"
                }}
            >
                <CommunitiesFeedContent
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
            </Box>
       
    );
};

export default CommunitiesFeedSidebar;

