import { Grid } from '@mui/material';
import React from 'react';

type RightSidebarsProps = {
    children:React.ReactNode
};

const RightSidebars:React.FC<RightSidebarsProps> = ({children}) => {
  
  return (
      <Grid
          mt="4rem"
      item
      mr="auto"
          pt="0 !important"
          component="section"
            pl="24px !important"
          xs={3}
      >
          {children}
      </Grid>
  );
}
export default RightSidebars;