import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CreatePostCard from "../createPost/CreatePostCard";
import CreatePostForm from "../createPost/CreatePostForm";
import PostCard from "../createPost/PostCard";
import PostsTopicsCard from "../createPost/PostsTopicsCard";
import { CustomCard } from "../mui";
import Navbar from "../Navbar/Navbar";
import CommunitiesFeedSidebar from "../Sidebars/CommunitiesFeedSidebar";
import TopCommunitiesSidebar from "../Sidebars/TopCommunitiesSidebar";

type LayoutProps = {
    children: React.ReactNode;
};

const posts = [
    {
        id:"oprtiufgfkj-5659834=39458",
        communityName: "r/oussama",
        poster: "u/oussama-bennabi",
        createdAt: "4 hours ago",
        title: "I want to speak with the manager",
        photo: "",
        comments: "551",
        likes: "7.9k",
    },
    {
        id:"oprtiufgfkj-5659834=39458",
        communityName: "r/nourhane",
        poster: "u/nourhane-sabo3i",
        createdAt: "2 hours ago",
        title: "I want to speak with oussama",
        photo: "",
        comments: "551",
        likes: "7k",
    },
    ,
    {
        id:"oprtiufgfkj-5659834=39458",
        communityName: "r/mbarek",
        poster: "u/mbarek-deeznuts",
        createdAt: "1 minute ago",
        title: "I want to be rich",
        photo: "",
        comments: "1",
        likes: "7",
    },

    {
        id:"oprtiufgfkj-5659834=39458",
        communityName: "r/walid",
        poster: "u/oussama-walid",
        createdAt: "2 seconds ago",
        title: "I play genching impact",
        photo: "",
        comments: "5",
        likes: "700.9k",
    },

    ,
    {
        id:"oprtiufgfkj-5659834=39458",
        communityName: "r/meriam",
        poster: "u/meriam-benmansour",
        createdAt: "1 hours ago",
        title: "I want be good at programing like oussama",
        photo: "",
        comments: "551",
        likes: "1.9k",
    },
];
// the reson why i put all the home page code here in the layout just to avoid passing [showSidbar and setShowSidebar]
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            {/* <Grid
                container
                sx={{ mt: ".5rem", p: "0rem" }}
                spacing={5}
                component={"main"}
                justifyContent="center"
            >
                 <Grid
                    pt="0 !important"
                    mr="auto"
                    item
                    component="aside"
                    xs={"auto"}
                >
                    <CustomCard
                        sx={{ position: "sticky !important", top: "56px" }}
                    >
                        {showSidebar && (
                            <CommunitiesFeedSidebar
                                showSidebar={showSidebar}
                                setShowSidebar={setShowSidebar}
                            />
                        )}
                    </CustomCard>
                </Grid>

                <Grid
                    item
                    pt="0 !important"
                    minWidth="640px"
                    maxWidth="640px !important"
                    component="section"
                    xs={6}
                    ml={"2rem"}
                >
                    <CustomCard sx={{ mb: "1rem" }}>
                        <CreatePostCard />
                    </CustomCard>
                    <CustomCard sx={{ mb: "1rem" }}>
                        <PostsTopicsCard />
                    </CustomCard>
                    {posts.map((post) => (
                        <PostCard post={post} key={post?.id} />
                    ))}
                </Grid>

                <Grid
                    item
                    pt="0 !important"
                    mr="auto"
                    component="section"
                    xs={3}
                >
                    <TopCommunitiesSidebar />
                </Grid> 
            </Grid> */}
            <CustomCard sx={{ mb: "1rem" ,m:"auto",width:"740px"}}>
                <CreatePostForm />
            </CustomCard>
        </>
    );
};
export default Layout;
