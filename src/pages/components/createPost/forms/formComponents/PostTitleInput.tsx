import { postFormInputsState } from "@/pages/atoms/stateAtoms/PostInputsAtom";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from "recoil";

// interface PostTitleInputProps extends TextFieldProps {
  
// };

const PostTitleInput: React.FC<TextFieldProps> = ({ ...props }) => {
    const [{ postTitleValue},setFormData]= useRecoilState(postFormInputsState)
  return (
      <TextField
          id="outlined-multiline-flexible"
          label="Title"
          value={postTitleValue}
          onChange={(e)=>{setFormData((prev)=>({...prev,postTitleValue:e.target.value}))}}
          multiline
          fullWidth
          maxRows={4}
          InputLabelProps={{
              style: {
                  color: "grey",
              },
          }}
          {...props}
      />
  );
};
export default PostTitleInput;