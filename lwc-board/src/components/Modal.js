import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button, Input } from '../elements/index';
import Header from './Header';

const loginModal = ({ state, closeModal }) => {
  return state ? (
    <React.Fragment>
      <ModalBackground>
        <Grid bgColor="#485460" display="flex" column height="100vh">
          <Header>
            <Text color="white" fontSize="42px" fontWeight="bold">
              로그인
            </Text>
          </Header>
          <Grid width="50%" margin="5% auto 0 auto" padding="12px">
            <Text color="#d2dae2" margin="0" padding="2px">
              아이디
            </Text>
            <Input placeholder="아이디를 입력해주세요." />
          </Grid>

          <Grid width="50%" margin="0 auto" padding="12px">
            <Text color="#d2dae2" margin="0" padding="2px">
              비밀번호
            </Text>
            <Input placeholder="비밀번호를 입력해주세요." />
          </Grid>
          <Grid display="flex" width="14%" cursor="pointer" margin="5% auto">
            <Button
              bgColor="#d2dae2"
              padding="16px"
              fontSize="16px"
              margin="0 auto"
            >
              <Text margin="0">로그인</Text>
            </Button>
            <Button
              bgColor="#d2dae2"
              padding="16px"
              fontSize="16px"
              margin="auto"
              _onClick={(e) => closeModal(e)}
            >
              <Text margin="0">돌아가기</Text>
            </Button>
          </Grid>
        </Grid>
      </ModalBackground>
    </React.Fragment>
  ) : null;
};

const ModalBackground = styled.div`
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
export default loginModal;
