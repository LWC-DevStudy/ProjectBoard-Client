import React from 'react';
import { css } from 'styled-components';
// components
import Header from '../components/Header';

// elements
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
function Home() {
  return (
    <React.Fragment>
      <Grid bgColor="#485460" height="100vh" padding="8px">
        <Grid display="flex" cursor="pointer" hoz="flex-end" margin="20px 0">
          <Button
            fontSize="10px"
            padding="5px"
            radius="8px"
            margin="0px 5px"
            bgColor="#d2dae2"
            color="black"
          >
            로그인
          </Button>
          <Button
            fontSize="10px"
            padding="5px"
            radius="8px"
            margin="0px 10% 0px 5px"
            bgColor="#d2dae2"
            color="black"
          >
            회원가입
          </Button>
        </Grid>
        <Header>
          <Text fontWeight="bold" color="white">
            일일계획 세우기
          </Text>
        </Header>
        <Grid
          height="70%"
          width="80%"
          margin="auto"
          padding="2%"
          bgColor="#d2dae2"
        >
          <Grid
            bgColor="white"
            textAlign="center"
            cursor="pointer"
            addstyle={() => {
              return css`
                cursor: pointer;
              `;
            }}
            radius="8px"
            width="80%"
            margin="auto"
          >
            <Text>제목입니당</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
