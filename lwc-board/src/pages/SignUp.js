import React from 'react';

// conponents
import Header from '../components/Header';

// elements
import { Grid, Text, Input, Button } from '../elements/index';

const SignUp = () => {
  return (
    <Grid bgColor="#485460" display="flex" column height="100vh">
      <Header>
        <Text color="white" fontSize="42px" fontWeight="bold">
          회원가입
        </Text>
      </Header>

      <Grid width="50%" margin="5% auto 0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="4px">
          아이디
        </Text>
        <Input placeholder="아이디를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="4px">
          비밀번호
        </Text>
        <Input placeholder="비밀번호를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text color="#d2dae2" margin="0" padding="4px">
          비밀번호 확인
        </Text>
        <Input placeholder="비밀번호를 확인해주세요." />
      </Grid>
      <Button
        bgColor="#d2dae2"
        padding="12px"
        fontSize="16px"
        margin="1% auto 0 auto"
      >
        <Text margin="0">회원가입</Text>
      </Button>
    </Grid>
  );
};

export default SignUp;
