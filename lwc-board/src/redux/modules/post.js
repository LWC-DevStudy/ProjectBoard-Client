//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
import { getToken, setToken } from '../../shared/token';

export const addPostDB = (title, content) => {
  return function (dispatch, getState, { history }) {
    const token = getToken('token');
    instance.defaults.headers.common['Authorization'] = `${token}`;
    instance
      .post('/board', { title, content })
      .then((res) => {
        console.log(res);
        dispatch(addPost({ title: title, content: content }));
        window.alert('글 작성이 완료되었습니다!');
        // history.push('/');
      })
      .catch((err) => {
        window.alert('글 작성에 오류가 있습니다!');
        console.log(err);
      });
  };
};

export const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get('/board')
      .then((res) => {
        let post_list = res.data;
        dispatch(getPost(post_list));
        console.log(post_list);
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!');
        console.log(err);
      });
  };
};

export const deletePostDB = (boardId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/board/${boardId}`)
      .then((res) => {
        window.alert('게시물이 삭제되었어요!');
        dispatch(deletePost(boardId));
        history.replace('/');
      })
      .catch((err) => {
        window.alert('게시물 삭제에 오류가 있습니다!');
        console.log(err);
      });
  };
};

export const editPostDB = (boardId, title, content) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/board/${boardId}`, { title, content })
      .then((res) => {
        console.log(res);
        window.alert('수정이 완료되었어요!');
        history.push('/');
      })
      .catch((err) => {
        window.alert('리뷰 수정에 오류가 있습니다!');
        console.log(err);
      });
  };
};

const initialState = {
  list: [{ title: '안녕하세요' }],
};

// 리덕스
const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const title = action.payload.title;
      const content = action.payload.content;
      state.list.push({ title, content });
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },

    deletePost: (state, action) => {
      let idx = state.list.findIndex((r) => r._id === action.payload);
      if (idx !== -1) {
        state.list.splice(idx, 1);
      }
    },

    editPost: (state, action) => {
      const edit = action.payload;
      const edit_list = state.list.map((l, idx) => {
        if (idx === action.index) {
          return edit;
        } else {
          return l;
        }
      });
      return { list: edit_list };
    },
  },
});
export const { addPost, getPost, deletePost, editPost } = post.actions;

export default post;
