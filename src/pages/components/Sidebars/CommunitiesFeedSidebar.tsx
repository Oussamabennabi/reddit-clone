
import React from "react";
import { CustomCard } from "../mui";
import { CommunitiesFeedContent } from "./CommunitiesFeedContent";

type CommunitiesFeedSidebarProps = {
 
};

const CommunitiesFeedSidebar: React.FC<CommunitiesFeedSidebarProps> = () => {

    return (
        <CustomCard
            sx={{
                width: "270px",
                py: "1rem",
                height: "94.4vh",
               
            }}
        >
            <CommunitiesFeedContent/>
        </CustomCard>
    );
};

export default CommunitiesFeedSidebar;

