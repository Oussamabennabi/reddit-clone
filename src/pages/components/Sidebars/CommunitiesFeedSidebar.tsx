import { Box, Button } from "@mui/material";
import React from "react";
import { CustomCard } from "../mui";
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
        <CustomCard
            sx={{
                width: "270px",
                py: "1rem",
                height: "93.5vh",
               
            }}
        >
            <CommunitiesFeedContent
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
        </CustomCard>
    );
};

export default CommunitiesFeedSidebar;

