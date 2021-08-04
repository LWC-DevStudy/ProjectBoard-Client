import React from 'react';
import { history } from '../redux/configStore';
// style
import { css } from 'styled-components';

// components
import Header from '../components/Header';
// elements
import { Grid, Text, Button } from '../elements/index';

const Home = (props) => {
  return (
    <React.Fragment>
      <Grid bgColor="#485460" height="100vh" padding="8px">
        <Grid display="flex" cursor="pointer" hoz="flex-end" margin="20px 0">
          <Button
            fontSize="16px"
            padding="15px"
            radius="8px"
            margin="0px 5px"
            bgColor="#d2dae2"
            color="black"
            _onClick={() => {
              history.push('/login');
            }}
          >
            로그인
          </Button>
          <Button
            fontSize="16px"
            padding="15px"
            radius="8px"
            margin="0px 10% 0px 5px"
            bgColor="#d2dae2"
            color="black"
            onClick={() => {
              history.push('/signup');
            }}
          >
            회원가입
          </Button>
        </Grid>
        <Header>
          <Text fontWeight="bold" fontSize="42px" color="white">
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
            fontSize="16px"
            padding="8px"
            margin="auto"
          >
            <Text>제목입니당</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
