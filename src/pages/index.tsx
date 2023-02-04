// import Head from "next/head";
import React from "react";
import CreatePostCard from "./components/createPost/CreatePostCard";
import PostCard from "./components/createPost/PostCard";
import PostsTopicsCard from "./components/createPost/PostsTopicsCard";
import { CustomCard } from "./components/mui";
import HomePageLayout from "./Layouts/HomePageLayout";

const posts = [
    {
        id: "oprtiufgfkj-5659834=39458",
        communityName: "r/oussama",
        poster: "u/oussama-bennabi",
        createdAt: "4 hours ago",
        title: "I want to speak with the manager",
        photo: "",
        comments: "551",
        likes: "7.9k",
    },
    {
        id: "oprtiufgfkj-5659834=39458",
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
        id: "oprtiufgfkj-5659834=39458",
        communityName: "r/mbarek",
        poster: "u/mbarek-deeznuts",
        createdAt: "1 minute ago",
        title: "I want to be rich",
        photo: "",
        comments: "1",
        likes: "7",
    },

    {
        id: "oprtiufgfkj-5659834=39458",
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
        id: "oprtiufgfkj-5659834=39458",
        communityName: "r/meriam",
        poster: "u/meriam-benmansour",
        createdAt: "1 hours ago",
        title: "I want be good at programing like oussama",
        photo: "",
        comments: "551",
        likes: "1.9k",
    },
];
export default function Home() {
   
    return (
        <HomePageLayout>
            <>
                <CustomCard sx={{ mb: "1rem" }}>
                    <CreatePostCard />
                </CustomCard>

                <CustomCard sx={{ mb: "1rem" }}>
                    <PostsTopicsCard />
                </CustomCard>
                {posts.map((post) => (
                    <PostCard post={post} key={post?.id} />
                ))}
            </>
        </HomePageLayout>
    );
}

{
    /* <Head>
    <title>Reddit</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
</Head>; */
}
