import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { a11yProps, TabPanel } from "../mui";
import MicNoneIcon from "@mui/icons-material/MicNone";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import PostForm from "./forms/PostForm";

export default function CreatePostForm() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    selectionFollowsFocus
                    value={value}
                    onChange={handleChange}
                    aria-label="create-post-form"
                >
                    <Tab
                        icon={<SubjectOutlinedIcon />}
                        iconPosition="start"
                        label="Post"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                        }}
                        {...a11yProps(0)}
                    />

                    <Tab
                        icon={<ImageOutlinedIcon />}
                        iconPosition="start"
                        label="Images & Vidio"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                        }}
                        {...a11yProps(0)}
                    />

                    <Tab
                        icon={<LinkOutlinedIcon />}
                        iconPosition="start"
                        label="Link"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                        }}
                        {...a11yProps(0)}
                    />

                    <Tab
                        icon={<FormatListNumberedOutlinedIcon />}
                        iconPosition="start"
                        label="Poll"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                        }}
                        {...a11yProps(0)}
                    />

                    <Tab
                        icon={<MicNoneIcon />}
                        iconPosition="start"
                        label="Talk"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                        }}
                        {...a11yProps(0)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PostForm/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}

