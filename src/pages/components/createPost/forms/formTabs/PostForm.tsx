import { postFormInputsState } from "@/pages/atoms/stateAtoms/PostInputsAtom";
import MarkdownEditor from "@/pages/components/mdEditor/MarkdownEditor";
import React from 'react';
import { useRecoilState } from "recoil";


type PostFormProps = {
  
};

const PostForm:React.FC<PostFormProps> = () => {
    const [{ postMarkdownValue }, setFormData] =
        useRecoilState(postFormInputsState);

  return (
      <MarkdownEditor
          value={postMarkdownValue}
          onChange={(value) =>
              setFormData((prev) => ({
                  ...prev,
                  postMarkdownValue:value||"",
              }))
          }
      />
  );
}
export default PostForm;