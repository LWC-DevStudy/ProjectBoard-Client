import React from 'react';

// elements
import { Grid, Text, Input, Button } from '../elements/index';

function SignUp() {
  return (
    <Grid display="flex" column height="100vh">
      <Grid width="50%" margin="20% auto 0 auto" padding="12px">
        <Text margin="0" padding="2px">
          아이디
        </Text>
        <Input placeholder="아이디를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text margin="0" padding="2px">
          비밀번호
        </Text>
        <Input placeholder="비밀번호를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="12px">
        <Text margin="0" padding="2px">
          비밀번호 확인
        </Text>
        <Input placeholder="비밀번호를 확인해주세요." />
      </Grid>
      <Button
        bgColor="#95EDC4"
        padding="12px"
        fontSize="16px"
        margin="1% auto 0 auto"
      >
        <Text margin="0">회원가입</Text>
      </Button>
    </Grid>
  );
}

export default SignUp;
