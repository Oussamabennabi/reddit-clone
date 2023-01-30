import { Box } from '@mui/material';
import React from 'react';
import { CustomAvatar, CustomIcon, Search, SearchIconWrapper, StyledInputBase } from '../mui';
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

type CreatePostCardProps = {
  
};

const CreatePostCard:React.FC<CreatePostCardProps> = () => {
  
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
          >
              <SearchIconWrapper>
                  {/* <SearchIcon /> */}
                  <AddOutlinedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  fullWidth
                  color="error"
                  placeholder="Create Post"
                  inputProps={{ "aria-label": "create-post" }}
              />
          </Search>
          <CustomIcon tooltipPlacment="bottom" tooltipTitle="Attach Photo">
              <CollectionsOutlinedIcon />
          </CustomIcon>
          <CustomIcon tooltipPlacment="bottom" tooltipTitle="Attach File">
              <AttachFileOutlinedIcon />
          </CustomIcon>
      </Box>
  );
}
export default CreatePostCard;