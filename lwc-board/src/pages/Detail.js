import React from 'react';

// components
import Header from '../components/Header';

// elements
import { Grid, Text, Button } from '../elements/index';

const Detail = () => {
  return (
    <Grid bgColor="#485460" display="flex" column height="100vh">
      <Header>
        <Text color="white" fontSize="42px" fontWeight="bold">
          상세 페이지
        </Text>
      </Header>

      <Grid width="" bgColor="red">
        <Text>제목</Text>
        <Grid width="100%" height="100%" bgColor="yellow"></Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
