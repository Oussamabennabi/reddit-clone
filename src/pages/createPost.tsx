import { Typography } from '@mui/material';
import React from 'react';
import CreatePostForm from './components/createPost/CreatePostForm';
import PostFormPageLayout from './Layouts/PostFormPageLayout';

type CreatePostProps = {
  
};

const CreatePost:React.FC<CreatePostProps> = () => {
  
  return (
      <PostFormPageLayout>
          <>
              <Typography component="h6" sx={{width:"100%",borderBottom:"1px solid grey", p:"1rem 0rem" ,mb:"1rem"}} variant='h6'>Create Post</Typography>
              {/* Main content */}
              <CreatePostForm />
          </>
      </PostFormPageLayout>
  );
}
export default CreatePost;