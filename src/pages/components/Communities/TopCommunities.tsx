import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import { CustomAvatar, CustomCommunityAvatar,  PrimaryButton } from '../mui';

type TopCommunitiesProps = {
  
};

// TODO:  pass the community details here
const CommunityInfoButton = ({ community}:any ) => {
  const theme = useTheme()
  return (
      <Box
          display="flex"
          sx={{
              outline: "1px solid ",
              p: ".5rem",
              borderRadius: "4px",
              cursor: "pointer",
              outlineColor: `${
                  theme.palette.mode === "dark" ? "#585858" : "#b8b8b8"
              }`,
          }}
      >
          <Typography
              display={"flex"}
              alignItems="center"
              gap=".5rem"
              fontSize="14px"
              component="div"
          >
              <CustomCommunityAvatar imgSrc="#" />
              {community.name}
          </Typography>
          <PrimaryButton sx={{ml:"auto"}}>Join</PrimaryButton>
      </Box>
  );
}
const TopCommunities: React.FC<TopCommunitiesProps> = () => {
  
  const communities = [
    {
      name:"r/oussama",id:"spo;dgi-40594-30459",avatar:<CustomAvatar imgSrc='#'></CustomAvatar>
    },
    {
      name:"r/nourhane",id:"spo;dgi-40594-g",avatar:<CustomAvatar imgSrc='#'></CustomAvatar>
    },
    {
      name:"r/askReddit",id:"spo;dgi-40594-df",avatar:<CustomAvatar imgSrc='#'></CustomAvatar>
    },
    {
      name:"r/oussama",id:"spo;dgi-40594-df9",avatar:<CustomAvatar imgSrc='#'></CustomAvatar>
    },
  ]
  
  return (
      <Box  display="flex" gap=".5rem" component={"div"} flexDirection="column">
          {communities.map((community) => (
        <CommunityInfoButton key={community.id} community={community}/>
        
      ))}

      </Box>
  );
}
export default TopCommunities;



