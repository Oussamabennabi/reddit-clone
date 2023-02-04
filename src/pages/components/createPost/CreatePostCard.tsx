import { Box } from '@mui/material';
import React from 'react';
import { CustomAvatar, CustomIcon, Search, SearchIconWrapper, StyledInputBase } from '../mui';
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from 'next/router';

type CreatePostCardProps = {
  
};

const CreatePostCard:React.FC<CreatePostCardProps> = () => {
   	const router = useRouter();
  
  return (
      <Box display={"flex"} p=".6rem" alignItems={"center"}>
          <CustomAvatar imgSrc="#" />
          <Search
              sx={{
                  flexGrow: "1",
                  marginRight: "16px",
                  marginLeft: "16px !important",
                  borderRadius: ".3rem",
              }}
              onClick={() => {
                  router.push("/createPost");
              }}
          >
              <SearchIconWrapper>
                  {/* <SearchIcon /> */}
                  <AddOutlinedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  fullWidth
                  contentEditable={false}
                  value=""
                  color="error"
                  placeholder="Create Post"
                  inputProps={{ "aria-label": "create-post" }}
              />
          </Search>
          <CustomIcon
              onClick={() => {
                  router.push("/createPost?media=true");
              }}
              tooltipPlacment="bottom"
              tooltipTitle="Attach Photo"
          >
              <CollectionsOutlinedIcon />
          </CustomIcon>
          <CustomIcon
              onClick={() => {
                  router.push("/createPost?url=true");
              }}
              tooltipPlacment="bottom"
              tooltipTitle="Attach File"
          >
              <AttachFileOutlinedIcon />
          </CustomIcon>
      </Box>
  );
}
export default CreatePostCard;