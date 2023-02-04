import Box from "@mui/material/Box";
import React from "react";
import DragDropFile from "../../../dragDrop/DragDropFile";

type ImagesAndVideoFormProps = {};

const ImagesAndVideoForm: React.FC<ImagesAndVideoFormProps> = () => {
    return (
        <Box display="flex" flexDirection="column" gap="1rem">
            <DragDropFile />
        </Box>
    );
};
export default ImagesAndVideoForm;
