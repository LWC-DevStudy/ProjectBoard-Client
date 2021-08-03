import React from 'react';

// components
import Header from '../components/Header';

// elements
import { Grid, Text, Input, Button } from '../elements/index';

const Write = () => {
  return (
    <Grid bgColor="#485460" display="flex" column height="100vh">
      <Header>
        <Text color="white" fontSize="42px" fontWeight="bold">
          일일 계획을 작성해보아요!
        </Text>
      </Header>

      <Grid width="50%" margin="10% auto 0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="4px">
          제목
        </Text>
        <Input placeholder="제목을 작성해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="4px">
          내용
        </Text>
        <textarea
          placeholder="내용을 작성해주세요."
          style={{
            width: '95%',
            borderRadius: '14px',
            height: '100%',
            padding: '14px',
          }}
        />
      </Grid>

      <Button
        bgColor="#d2dae2"
        fontSize="16px"
        padding="12px"
        margin="5% auto 0 auto"
      >
        <Text margin="0">작성하기</Text>
      </Button>
    </Grid>
  );
};

export default Write;
