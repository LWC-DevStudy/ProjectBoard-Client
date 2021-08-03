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

      <Grid width="50%" margin="5% auto 0 auto">
        <Text color="#d2dae2" margin="0" padding="4px">
          제목
        </Text>
        <Grid
          padding="8px"
          width="100%"
          height="50px"
          bgColor="white"
          radius="12px"
        ></Grid>
      </Grid>

      <Grid width="50%" margin="3% auto 0 auto">
        <Text color="#d2dae2" margin="0" padding="4px">
          내용
        </Text>
        <Grid
          padding="8px"
          width="100%"
          height="300px"
          bgColor="white"
          radius="12px"
        ></Grid>
      </Grid>

      <Grid
        display="flex"
        width="10%"
        margin="3% auto 0 auto"
        textAlign="center"
      >
        <Button
          padding="12px 18px"
          fontSize="16px"
          margin="0 auto"
          bgColor="#d2dae2"
        >
          <Text margin="0">수정</Text>
        </Button>

        <Button
          padding="12px 18px"
          fontSize="16px"
          margin="0 auto"
          bgColor="#d2dae2"
        >
          <Text margin="0">삭제</Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Detail;
