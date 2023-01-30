import { Box, Button, Typography } from "@mui/material";
import { CustomIcon, CustomMenuButton } from "../mui";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";

type CommunitiesFeedContentProps = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    showSidebar: boolean;
};
export const CommunitiesFeedContent = ({
    setShowSidebar,
    showSidebar,
}: CommunitiesFeedContentProps) => {


    return (
        <Box position={"relative"}>
            <Typography
                onClick={() => setShowSidebar(prev=>prev?false:true)}
                component="div"
                sx={{ position: "absolute", right: ".3rem", top: "-.7rem" }}
            >
                <CustomIcon
                    tooltipTitle={`${
                        showSidebar ? "close Sidebar" : "expand Sidebar"
                    }`}
                    tooltipPlacment="bottom"
                >
                    <OpenInFullOutlinedIcon sx={{ fontSize: "16px" }} />
                </CustomIcon>
            </Typography>
            <Typography
                ml="1rem"
                component={"small"}
                display="block"
                fontSize="11px"
                color="gray"
            >
                FEEDS
            </Typography>
            <CustomMenuButton text="Home" />
            <CustomMenuButton text="Popular" />

            <Typography
                ml="1rem"
                component={"small"}
                fontSize="11px"
                color="gray"
            >
                RECENT
            </Typography>

            <CustomMenuButton text="r/nextjs" />
            <CustomMenuButton text="r/torrents" />
            <CustomMenuButton text="r/facepalm" />

            <Typography
                ml="1rem"
                component={"small"}
                fontSize="11px"
                color="gray"
            >
                TOPICS
            </Typography>
            <CustomMenuButton
                text="Gaming"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Sports"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Busniss, Economics,a..."
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Crypto"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Television"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="Celebrity"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
            <CustomMenuButton
                text="More Topics"
                rightIcon={<ExpandMoreOutlinedIcon />}
            />
        </Box>
    );
};
