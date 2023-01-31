import Typography from '@mui/material/Typography';
import React from 'react';
import TopCommunities from '../Communities/TopCommunities';
import { CustomCard } from '../mui';

type TopCommunitiesSidebarProps = {
  
};

const TopCommunitiesSidebar:React.FC<TopCommunitiesSidebarProps> = () => {
  
  return (
      <CustomCard
          sx={{ p: ".6rem", width: "312px", position: "sticky", top: "56px" }}
      >
          <Typography
              fontWeight={"bold"}
              textAlign="left"
              mb="1rem"
              component={"h4"}
          >
              Top Communities
          </Typography>
          <TopCommunities />
      </CustomCard>
  );
}
export default TopCommunitiesSidebar;