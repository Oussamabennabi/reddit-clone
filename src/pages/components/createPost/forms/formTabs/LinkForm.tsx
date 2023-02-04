import { postFormInputsState } from "@/pages/atoms/stateAtoms/PostInputsAtom";
import { Box, TextField } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";

type LinkFormProps = {};

const LinkForm: React.FC<LinkFormProps> = () => {
      const [{ postUrlValue }, setFormData] =
          useRecoilState(postFormInputsState);
    return (
        <Box display="flex" flexDirection="column" gap="1rem">
            <TextField
                value={postUrlValue}
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        postUrlValue: e.target.value,
                    }))
                }
                id="outlined-multiline-flexible"
                label="Url"
                multiline
                fullWidth
                maxRows={4}
                // sx={{ height:"90px" }}
                InputLabelProps={{
                    style: {
                        color: "grey",
                    },
                }}
                inputProps={{
                    style: {
                        height: "60px",
                    },
                }}
            />
        </Box>
    );
};
export default LinkForm;
