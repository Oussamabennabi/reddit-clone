
import { useTheme } from "@emotion/react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React from 'react';
import MarkdownEditor from "../../mdEditor/MarkdownEditor";
import { PrimaryButton, SecondaryButton } from "../../mui";

type PostFormProps = {
  
};

const PostForm:React.FC<PostFormProps> = () => {
  return (
      <Box display="flex" flexDirection="column" gap="1rem">
          <TextField
              id="outlined-multiline-flexible"
              label="Title"
              multiline
              fullWidth
              maxRows={4}
              InputLabelProps={{
                  style: {
                      color: "grey",
                  },
              }}
          />
          <MarkdownEditor />
          <Box display="flex" justifyContent="flex-end" alignItems="center">
              <SecondaryButton sx={{mr:"1rem"}}>Cancel</SecondaryButton>
              <PrimaryButton>Post</PrimaryButton>
          </Box>
      </Box>
  );
}
export default PostForm;