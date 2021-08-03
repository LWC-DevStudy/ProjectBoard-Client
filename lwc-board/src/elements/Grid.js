import React from 'react';
import styled from 'styled-components';

const Grid = ({ _onClick, children, ...props }) => {
  return (
    <GridStyle onClick={_onClick} {...props}>
      {children}
    </GridStyle>
  );
};

const GridStyle = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.hoz};
  align-items: ${(props) => props.alignItem};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderbot};
  border-radius: ${(props) => props.radius};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.z};
  box-shadow: ${(props) => props.shadow};
  box-sizing: border-box;
  transform: translate(${(props) => props.translate});
  ${(props) => props.addstyle};
`;

Grid.defaultProps = {
  width: '100%',
  _onClick: () => {},
};

export default Grid;
