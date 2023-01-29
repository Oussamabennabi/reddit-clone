import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
// MUI
import SearchIcon from "@mui/icons-material/Search";
import { CustomExpandButton, Logo, Search, SearchIconWrapper, StyledInputBase } from "../mui";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
type NavbarLeftContentProps = {
  
};

const NavbarLeftContent:React.FC<NavbarLeftContentProps> = () => {
  const hideHome = useMediaQuery("(min-width:1000px)");
  
  return (
      <Box
          sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
          }}
      >
          <Typography sx={{ mr: `${hideHome && ".8rem"}` }} component="span">
              <Logo />
          </Typography>
          <CustomExpandButton
              width={`${hideHome && "270px"}`}
              leftIcon={<HomeIcon />}
              rightIcon={<ExpandMoreOutlinedIcon />}
          >
              <Typography fontSize="14px">{hideHome && "Home"}</Typography>
          </CustomExpandButton>

          <Search
              sx={{
                  flexGrow: "1",
                  marginRight: "16px",
                  marginLeft: "16px !important",
              }}
          >
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  fullWidth
                  placeholder="Search Reddit"
                  inputProps={{ "aria-label": "search" }}
              />
          </Search>
      </Box>
  );
}
export default NavbarLeftContent;