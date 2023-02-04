import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../../mui';

type CreatePostFormButtonsProps = {
    onSubmit: (args: any) => void;
    disabled:boolean
};

const CreatePostFormButtons: React.FC<CreatePostFormButtonsProps> = ({
    onSubmit,
    disabled,
}) => {
    const router = useRouter();

    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center">
            <SecondaryButton
                onClick={() => router.push("/")}
                sx={{ mr: "1rem" }}
            >
                Cancel
            </SecondaryButton>
            <PrimaryButton disabled={disabled}  sx={{"&:disabled": {cursor:"not-allowed "}}} onClick={onSubmit} type="submit">
                Post
            </PrimaryButton>
        </Box>
    );
};
export default CreatePostFormButtons;