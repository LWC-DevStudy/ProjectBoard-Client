import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { history } from '../redux/configStore';
import { LogInDB } from '../redux/modules/user';
import styled from 'styled-components';
import { Grid, Text, Button, Input } from '../elements/index';
import Header from '../components/Header';

const Login = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string().required('아이디를 입력해주세요!!'),
      password: Yup.string().required('패스워드를 입력해주세요!'),
    }),

    onSubmit: (values) => {
      dispatch(LogInDB(values));
    },
  });
  return (
    <React.Fragment>
      <LoginBackground>
        <Grid bgColor="#485460" display="flex" column height="100vh">
          <Header>
            <Text color="white" fontSize="42px" fontWeight="bold">
              로그인
            </Text>
          </Header>
          <form name="loginForm" onSubmit={formik.handleSubmit}>
            <Grid width="50%" margin="5% auto 0 auto" padding="12px">
              <Text color="#d2dae2" margin="0" padding="2px">
                아이디
              </Text>
              <Input
                placeholder="아이디를 입력해주세요."
                _onChange={formik.handleChange}
                value={formik.values.userName}
                id="userName"
                name="userName"
                type="userName"
              />
            </Grid>

            <Grid width="50%" margin="0 auto" padding="12px">
              <Text color="#d2dae2" margin="0" padding="2px">
                비밀번호
              </Text>
              <Input
                placeholder="비밀번호를 입력해주세요."
                id="password"
                name="password"
                type="password"
                _onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Grid>
            <Grid display="flex" width="14%" cursor="pointer" margin="5% auto">
              <Button
                bgColor="#d2dae2"
                padding="16px"
                fontSize="16px"
                margin="0 auto"
                type="submit"
              >
                <Text margin="0">로그인</Text>
              </Button>
              <Button
                bgColor="#d2dae2"
                padding="16px"
                fontSize="16px"
                margin="auto"
                _onClick={() => {
                  history.push('/');
                }}
              >
                <Text margin="0">돌아가기</Text>
              </Button>
            </Grid>
          </form>
        </Grid>
      </LoginBackground>
    </React.Fragment>
  );
};

const LoginBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #485460;
  z-index: 10;
  animation: 0.25s ease 0s 1 normal forwards running bcCCnc;
  color: black;
  overflow: auto;
`;
export default Login;
