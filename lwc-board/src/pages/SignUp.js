import React from 'react';

// elements
import { Grid, Text, Input, Button } from '../elements/index';

function SignUp() {
  return (
    <Grid display="flex" column bgColor="#C2B6F2" height="100vh">
      <Grid width="50%" margin="0 auto" padding="8px">
        <Text margin="0" padding="2px">
          아이디
        </Text>
        <Input placeholder="아이디를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="8px">
        <Text margin="0" padding="2px">
          비밀번호
        </Text>
        <Input placeholder="비밀번호를 입력해주세요." />
      </Grid>

      <Grid width="50%" margin="0 auto" padding="8px">
        <Text margin="0" padding="2px">
          비밀번호 확인
        </Text>
        <Input placeholder="비밀번호를 확인해주세요." />
      </Grid>
      <Button></Button>
    </Grid>
  );
}

export default SignUp;
