import { Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CustomIcon, SecondaryButton } from "../mui";
import CloseIcon from "@mui/icons-material/Close";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
    Media,
    PostFormInputsState,
    postFormInputsState,
} from "@/pages/atoms/stateAtoms/PostInputsAtom";
type DragDropFileProps = {};

const DragDropFile: React.FC<DragDropFileProps> = () => {
    // drag state
    const [dragActiveBox, setDragActiveBox] = React.useState(false);
    const [dragActiveBody, setDragActiveBody] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);

    const [{ postMediaValue }, setFormData] =
        useRecoilState(postFormInputsState);

    function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();

        setDragActiveBox(true);
    }
    function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.stopPropagation();
        e.preventDefault();

        setDragActiveBox(false);
    }

    function handleFileChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const type = e.target.files[0]?.type?.includes("image")
                ? "image"
                : "video";
            setFormData((prev) => ({
                ...prev,
                postMediaValue: { blob: e.target.files[0] ,type},
            }));
        }
    }

    function handleDropFile(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActiveBox(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const type = e.dataTransfer.files[0]?.type?.includes("image")
                ? "image"
                : "video";
            setFormData((prev) => ({
                ...prev,
                postMediaValue: { blob: e.dataTransfer.files[0], type },
            }));
        }
    }

    React.useEffect(() => {
        function handleDragOverBody(e: DragEvent) {
            e.preventDefault();
            e.stopPropagation();
            setDragActiveBody(true);
        }
        function handleDragLeaveBody(e: DragEvent) {
            e.preventDefault();
            e.stopPropagation();
            setDragActiveBody(false);
        }
        document.body.addEventListener("dragover", handleDragOverBody);
        document.body.addEventListener("dragleave", handleDragLeaveBody);

        return () => {
            document.body.removeEventListener("dragover", handleDragOverBody);
            document.body.removeEventListener("dragleave", handleDragLeaveBody);
        };
    }, [dragActiveBody]);

    const boxStyles: React.CSSProperties | undefined = {
        border: `${
            dragActiveBox
                ? "3px dashed grey"
                : dragActiveBody
                ? "1px dashed grey"
                : "1px solid grey"
        }`,
        width: "100%",
        height: "300px",
        borderRadius: ".6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        overflow: "hidden",
        // backgroundColor: `${dragActiveBody ? "#4b4b4b" : "transparent"}`,
    };

    const onButtonClick = () => {
        console.log('ghghgdfkj')
        inputRef?.current?.click();
    };
    return (
        <Box
            sx={{ ...boxStyles }}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragEnter}
            onDrop={handleDropFile}
        >
            {postMediaValue == null ? (
                <>
                    <Typography
                        fontWeight={"bold"}
                        sx={{ pointerEvents: "none", userSelect: "none" }}
                        component={"p"}
                    >
                        {dragActiveBox
                            ? "Drop Here To Upload"
                            : "Drag and drop images or"}
                    </Typography>
                    {!dragActiveBox && (
                        <SecondaryButton
                            sx={
                                {
                                    // pointerEvents: dragActiveBox ? "none" : "",
                                    // userSelect: dragActiveBox ? "none" : "",
                                }
                            }
                            onClick={onButtonClick}
                        >
                            Upload
                        </SecondaryButton>
                    )}
                    <Input
                        type="file"
                        inputRef={inputRef}
                        sx={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </>
            ) : (
                <ImageOrVidioPreview
                    file={postMediaValue}
                    setFile={setFormData}
                />
            )}
        </Box>
    );
};
export default DragDropFile;

type ImageOrVidioPreviewProps = {
    file: Media;
    setFile: SetterOrUpdater<PostFormInputsState>;
};
const ImageOrVidioPreview: React.FC<ImageOrVidioPreviewProps> = ({
    file,
    setFile,
}) => {
    // console.log(file?.type?.);
    return (
        <Box
            width="100%"
            height={"100%"}
            sx={{ backgroundColor: "black", position: "relative" }}
        >
            <CustomIcon
                tooltipPlacment="top"
                tooltipTitle="clear"
                sx={{
                    position: "absolute",
                    top: ".5rem",
                    right: ".5rem",
                    color: "#FF4500",
                    borderRadius: "20rem",
                    zIndex: "5",
                }}
                onClick={() => {
                    setFile((prev) => ({ ...prev, postMediaValue: null }));
                }}
            >
                <CloseIcon />
            </CustomIcon>
            {file &&
                (file?.type?.includes("image") ? (
                    <Box
                        component="img"
                        width="100%"
                        height={"100%"}
                        sx={{ objectFit: "contain" }}
                        src={URL.createObjectURL(file.blob)}
                    />
                ) : (
                    <Box
                        component="video"
                        width="100%"
                        height={"100%"}
                        controls
                        sx={{ objectFit: "cover" }}
                        src={URL.createObjectURL(file.blob)}
                    />
                ))}
        </Box>
    );
};
