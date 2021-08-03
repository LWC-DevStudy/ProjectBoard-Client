import React from 'react';
// components
import Header from '../components/Header';

// elements
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
function Home() {
  return (
    <React.Fragment>
      <Grid bgColor="white" height="100vh" padding="8px">
        <Grid display="flex" coloumn="false" cursor="pointer">
          <Button fontSize="10px">로그인</Button>
          <Button fontSize="10px">회원가입</Button>
        </Grid>
        <Header>
          <Text>일일계획 세우기</Text>
        </Header>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
