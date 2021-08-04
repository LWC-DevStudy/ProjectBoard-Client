import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// functions
import { setToken, removeToken } from '../../shared/token';

// 회원가입
export const SignUpDB = ({ userName, password, passwordConfirm }) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/register', { userName, password, passwordConfirm })
      .then((res) => {
        window.alert('회원가입을 해주셔서 감사합니다!');
        history.replace('/');
      })
      .catch((err) => {
        window.alert('오류가 발생했습니다. 관리자에게 문의해주세요.');
        console.log(err);
      });
  };
};

// 로그인
export const LogInDB = (userName, password) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/login', { userName, password })
      .then((res) => {
        const message = res.data.message;
        if (message !== 'success') {
          window.alert(res.data.message);
          return;
        }
        const userInfo = {
          token: res.data.token,
          userName: res.data.user,
        };
        dispatch(SetUser(userInfo));
        window.alert('로그인 성공');
        history.push('/');
        window.location.reload();
      })
      .catch((err) => {
        window.alert('아이디, 비밀번호를 확인해주세요.');
        console.log(err);
      });
  };
};

// 로그인 상태 확인
export const LogInCheck = (token) => {
  return function (dispatch, getState, { history }) {
    if (token) {
      dispatch(LogInDB(token));
    }
  };
};

// initialState
const initialState = {
  user_info: '',
  is_login: false,
};

// redux
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 로그인
    SetUser: (state, action) => {
      state.user_info = action.payload.userName;
      setToken('token', action.payload.setToken);
      state.is_login = true;
    },
    // 로그아웃
    LogOut: (state, action) => {
      removeToken('token');
      state.is_login = false;
      window.alert('로그아웃 완료');
    },
  },
});

export const { SetUser, LogOut } = user.actions;
export default user;
