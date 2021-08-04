import React from 'react';
import { useDispatch } from 'react-redux';
// form
import * as Yup from 'yup';
import { useFormik } from 'formik';
// conponents
import Header from '../components/Header';
// reducer
import { UserCreators } from '../redux/modules/user';
import { SignUpDB } from '../redux/modules/user';
// elements
import { Grid, Text, Input, Button } from '../elements/index';

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordConfirm: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string().required('아이디를 입력해주세요!'),
      password: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
      passwordConfirm: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 재입력해주세요')
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    }),

    onSubmit: (values) => {
      dispatch(SignUpDB(values));
    },
  });
  return (
    <Grid bgColor="#485460" display="flex" column height="100vh">
      <Header>
        <Text color="white" fontSize="42px" fontWeight="bold">
          회원가입
        </Text>
      </Header>
      <form name="signUpForm" onSubmit={formik.handleSubmit}>
        <Grid width="50%" margin="5% auto 0 auto" padding="12px">
          <Text color="#d2dae2" margin="0" padding="4px">
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
          <Text color="#d2dae2" margin="0" padding="4px">
            비밀번호
          </Text>
          <Input
            placeholder="비밀번호를 입력해주세요."
            _onChange={formik.handleChange}
            value={formik.values.password}
            id="password"
            name="password"
            type="password"
          />
          {/* {formik.touched.password && formik.errors.password
            ? window.alert(formik.errors.password)
            : null} */}
        </Grid>

        <Grid width="50%" margin="0 auto" padding="12px">
          <Text color="#d2dae2" margin="0" padding="4px">
            비밀번호 확인
          </Text>
          <Input
            placeholder="비밀번호를 확인해주세요."
            _onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
          />
          {/* {formik.touched.passwordConfirm && formik.errors.passwordConfirm
            ? window.alert(formik.errors.passwordConfirm)
            : null} */}
        </Grid>
        <Grid width="7%" margin="0 auto">
          <Button
            bgColor="#d2dae2"
            padding="12px"
            fontSize="16px"
            margin="0 auto"
            type="submit"
            value="회원가입"
          >
            <Text margin="0">회원가입</Text>
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUp;
