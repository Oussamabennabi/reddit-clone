import { communityModalState } from "@/pages/atoms/stateAtoms/communityModalAtom";
import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";

import DefaultModal from "./DefaultModal";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/system";
import { CustomTextField, PrimaryButton, SecondaryButton } from "../mui";
type CreateCommunityModalProps = {};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = () => {
    const [modal, setModal] = useRecoilState(communityModalState);

    return (
        <DefaultModal
            contentPadding={"1rem"}
            customStyles={{ width: "542px", p: "0rem" }}
            open={modal.open}
            setOpen={(value: boolean) => {
                setModal((prev) => ({ open: value }));
            }}
            headerTitle="Create a community"
        >
            <Typography component={"h3"} fontSize="16px" variant="h3">
                Name
            </Typography>
            <Typography component={"small"} fontSize="12px" color="GrayText">
                Community names including capitalization cannot be changed.
            </Typography>
            {/* <TextField
                label="r/"
                value={""}
                onChange={(e) => {}}
                multiline={false}
                fullWidth
                InputLabelProps={{
                    style: {
                        color: "grey",
                    },
                }}
            /> */}
            <CustomTextField
                required
                label="r/"
                sx={{ width: "100%", mt: "1rem", mb: ".6rem" }}
            />
            <Typography component={"small"} fontSize="12px" color="GrayText">
                21 Characters remaining.
            </Typography>
            <Typography
                component={"h3"}
                color="primary"
                fontSize="16px"
                variant="h3"
                mt="1rem"
            >
                Community Type
            </Typography>
            <RadioGroup
                aria-labelledby="Community Type"
                defaultValue="public"
          sx={{mb:"4rem"}}
            >
                <FormControlLabel
                    value="public"
                    control={<Radio />}
                    label={
                        <CustomCommunityTypeLabel
                            value="Public"
                            icon={<PersonIcon fontSize="small" />}
                            helperText="Anyone can view, post, and comment to this community"
                        />
                    }
                />

                <FormControlLabel
                    value="restricted"
                    control={<Radio />}
                    label={
                        <CustomCommunityTypeLabel
                            value="Restricted"
                            icon={<RemoveRedEyeIcon fontSize="small" />}
                            helperText="Anyone can view this community, but only approved users can post"
                        />
                    }
                />

                <FormControlLabel
                    value="private"
                    control={<Radio />}
                    label={
                        <CustomCommunityTypeLabel
                            value="Private"
                            icon={<LockIcon fontSize="small" />}
                            helperText="Only approved users can view and submit to this community"
                        />
                    }
                />
            </RadioGroup>
            <Box
                display={"flex"}
                gap=".8rem"
                justifyContent="flex-end"
                alignItems={"center"}
            >
                <SecondaryButton
                    sx={{
                        backgroundColor: "transparent",
                        color: "primary",
                        fontWeight: "bold",
                        outline: "1px solid #DD4A15",
                        "&:hover": { backgroundColor: "#DD4A1517" },
                        px: "1rem",
                        py: ".5rem",
                        "&:disabled": {
                            backgroundColor: "#ffcbb8",
                            color: "grey",
                        },
                    }}
                    onClick={() => {
                        setModal({ open: false });
                    }}
                >
                    Cancel
                </SecondaryButton>
                <PrimaryButton
                    sx={{
                        backgroundColor: "#DD4A15",
                        color: "white",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#fd652e" },
                        py: ".5rem",
                        px: "1rem",
                        "&:disabled": {
                            backgroundColor: "#ffcbb8",
                            color: "grey",
                        },
                    }}
                    type="submit"
                >
                    Create Community
                </PrimaryButton>
            </Box>
        </DefaultModal>
    );
};
export default CreateCommunityModal;
type CustomCommunityTypeLabelProps = {
    helperText: string;
    value: string;
    icon: React.ReactNode;
};
const CustomCommunityTypeLabel = ({
    helperText,
    value,
    icon,
}: CustomCommunityTypeLabelProps) => {
    return (
        <Box
            display="flex"
            justifyContent={"center"}
            gap=".3rem"
        alignItems="center"
        >
          {icon}
            <Typography fontSize="14px">{value}</Typography>
            <Typography component="small" color="greyText" fontSize="12px">
                {helperText}
            </Typography>
        </Box>
    );
};
