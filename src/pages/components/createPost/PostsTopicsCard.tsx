import { Box } from "@mui/system";
import React from "react";
import { CustomIcon, CustomIconWithText } from "../mui";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
type PostsTopicsCardProps = {};

const PostsTopicsCard: React.FC<PostsTopicsCardProps> = () => {
    return (
        <Box display="flex" p=".6rem" gap=".2rem" alignItems={"center"}>
            <CustomIconWithText
                tooltipPlacment="bottom"
                tooltipTitle="Best"
                text="Best"
            >
                <RocketOutlinedIcon />
            </CustomIconWithText>

            <CustomIconWithText
                tooltipPlacment="bottom"
                tooltipTitle="Hot"
                text="Hot"
            >
                <WhatshotOutlinedIcon />
            </CustomIconWithText>
            <CustomIconWithText
                tooltipPlacment="bottom"
                tooltipTitle="New"
                text="New"
            >
                <Brightness5OutlinedIcon />
            </CustomIconWithText>

            <CustomIconWithText
                tooltipPlacment="bottom"
                tooltipTitle="Top"
                text="Top"
            >
                <KeyboardDoubleArrowUpOutlinedIcon />
            </CustomIconWithText>


            <CustomIcon tooltipPlacment="bottom" tooltipTitle="More">
                <MoreHorizOutlinedIcon />
            </CustomIcon>
        </Box>
    );
};
export default PostsTopicsCard;
