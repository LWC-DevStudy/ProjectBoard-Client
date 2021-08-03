import React from 'react';

// components
import Header from '../components/Header';

// elements
import { Grid, Text, Input, Button } from '../elements/index';

function Write() {
  return (
    <Grid bgColor="#485460" display="flex" column height="100vh">
      <Header>
        <Text fontSize="42px" fontWeight="bold">
          일일 계획을 작성해보아요!
        </Text>
      </Header>

      <Grid width="50%" margin="5% auto 0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="2px">
          제목
        </Text>
        <Input placeholder="제목을 작성해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text color="#d2dae2" margin="0">
          내용
        </Text>
        <textarea
          style={{
            width: '95%',
            borderRadius: '14px',
            height: '100%',
            padding: '14px',
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Write;
