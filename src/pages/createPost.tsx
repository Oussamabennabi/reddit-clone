import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CreatePostForm from "./components/createPost/CreatePostForm";
import { auth } from "./firebase/firebase";
import PostFormPageLayout from "./Layouts/PostFormPageLayout";


const CreatePost: React.FC = () => {

    const [user] = useAuthState(auth);
    const router = useRouter();
    React.useEffect(() => {
        
        if (!user) {
            router.push("/");
        }
    },[])
    return (
        <PostFormPageLayout>
                {user &&
            <>
                <Typography
                    component="h6"
                    sx={{
                        width: "100%",
                        borderBottom: "1px solid grey",
                        p: "1rem 0rem",
                        mb: "1rem",
                    }}
                    variant="h6"
                >
                    Create Post
                </Typography>
                {/* Main content */}
                <CreatePostForm />
            </>
                }
        </PostFormPageLayout>
    );
};
export default CreatePost;
