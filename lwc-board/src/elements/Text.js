import React from 'react';
import styled from 'styled-components';

const Text = ({ children, ...props }) => {
  return <TextStyle {...props}>{children}</TextStyle>;
};

Text.defaultProps = {
  width: '100%',
  color: 'black',
};

const TextStyle = styled.p`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lh};
  letter-spacing: ${(props) => props.ls};
  text-align: ${(props) => props.textAlign};
  overflow: ${(props) => props.overflow};
  word-break: ${(props) => props.wb};
  white-space: ${(props) => props.ws};
  box-sizing: border-box;
  text-overflow: ellipsis;

  ${(props) => props.addstyle};
`;

export default Text;
