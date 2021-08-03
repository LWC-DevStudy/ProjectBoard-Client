import React from 'react';
import Grid from '../elements/Grid';
function Header({ children }) {
  return (
    <React.Fragment>
      <Grid padding="0px" margin="0 auto" width="100%" textAlign="center">
        {children}
      </Grid>
    </React.Fragment>
  );
}

export default Header;
