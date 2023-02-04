import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { a11yProps, TabPanel } from "../mui";

import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";

import { useRouter } from "next/router";

import ImagesAndVideoForm from "./forms/formTabs/ImagesAndVideoForm";
import PostForm from "./forms/formTabs/PostForm";
import LinkForm from "./forms/formTabs/LinkForm";
import PostTitleInput from "./forms/formComponents/PostTitleInput";
import CreatePostFormButtons from "./forms/formComponents/CreatePostFormButtons";
import { useRecoilState } from "recoil";
import { postFormInputsState } from "@/pages/atoms/stateAtoms/PostInputsAtom";

export default function CreatePostForm() {
    const [tabValue, setTabValue] = React.useState(0);
    const router = useRouter();
    const mediaQuery = Boolean(router.query["media"]);
    const urlQuery = Boolean(router.query["url"]);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    React.useEffect(() => {
        if (mediaQuery) {
            setTabValue(1);
            return;
        }
        if (urlQuery) {
            setTabValue(2);
            return;
        }
    }, [mediaQuery, urlQuery]);

    const [error, setError] = React.useState("");
    const [formData, setFormData] = useRecoilState(postFormInputsState);

    function onSubmit(e: any) {
        if (error !== "") {
            setError("");
        }
        e?.preventDefault();
        const postTitle = formData.postTitleValue;
        if (postTitle === "") {
            setError("Please enter a post title");
            return;
        }        

        if (tabValue === 0) {
            //  markdown
        } else if (tabValue === 1) {
            // media (video or photo)
            
        } else if (tabValue === 2) {
            // Url
            const url = formData.postUrlValue;
            // validate url
            const urlRegExp = new RegExp(
                "^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$"
            );
            if (!urlRegExp.test(url)) {
                setError("Please enter a valide url");
                return;
            }
        }
    }
    React.useEffect(() => {
        setError("")
    },[tabValue])
    return (
        <Box sx={{ backgroundColor: "background.paper" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    variant="fullWidth"
                    selectionFollowsFocus
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="create-post-form"
                    component={"div"}
                >
                    <Tab
                        icon={<SubjectOutlinedIcon />}
                        iconPosition="start"
                        label="Post"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                            width: "130px",
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
                            width: "186px",
                        }}
                        {...a11yProps(1)}
                    />

                    <Tab
                        icon={<LinkOutlinedIcon />}
                        iconPosition="start"
                        label="Link"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                            width: "130px",
                        }}
                        {...a11yProps(2)}
                    />

                    {/* <Tab
                        disabled
                        icon={<FormatListNumberedOutlinedIcon />}
                        iconPosition="start"
                        label="Poll"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                            width: "130px",
                        }}
                        {...a11yProps(3)}
                    />

                    <Tab
                        disabled
                        icon={<MicNoneIcon />}
                        iconPosition="start"
                        label="Talk"
                        sx={{
                            textTransform: "none",
                            color: "GrayText",
                            fontWeight: "bold",
                            width: "130px",
                        }}
                        {...a11yProps(4)}
                    /> */}
                </Tabs>
            </Box>
            <Box
                component={"form"}
                display="flex"
                flexDirection="column"
                gap="1rem"
                onSubmit={onSubmit}
                sx={{ p: 3 }}
            >
                <PostTitleInput />
                <TabPanel value={tabValue} index={0}>
                    <PostForm />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <ImagesAndVideoForm />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <LinkForm />
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    Comming Soon...
                </TabPanel>
                <TabPanel value={tabValue} index={4}>
                    Comming Soon...
                </TabPanel>
                {error}
                <CreatePostFormButtons disabled={false} onSubmit={() => {}} />
            </Box>
        </Box>
    );
}
