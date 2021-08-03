import React from 'react';
import Grid from '../elements/Grid';
function Header({ children }) {
  return (
    <React.Fragment>
      <Grid
        bgColor="white"
        padding="30px"
        margin="2% auto"
        width="60%"
        textAlign="center"
      >
        {children}
      </Grid>
    </React.Fragment>
  );
}

export default Header;
