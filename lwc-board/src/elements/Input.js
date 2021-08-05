import styled from 'styled-components';

const Input = ({
  id,
  type,
  name,
  value,
  placeholder,
  _onChange,
  _onKeyPress,
  _ref,
  ...props
}) => {
  return (
    <InputStyle
      id={id}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      name={name}
      ref={_ref}
      {...props}
    />
  );
};

Input.defaultProps = {
  _onChange: () => {},
  _onKeyPress: () => {},
  type: 'text',
  placeholder: '',
  width: '100%',
  height: '48px',
  bgColor: 'white',
  padding: '0 12px',
  radius: '14px',
  border: '1px solid #E7E7E7',
};

const InputStyle = styled.input`
  border: ${(props) => props.border};
  background: none;
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  box-shadow: ${(props) => props.shadow};
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.color};
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.color};
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.color};
  }
  ${(props) => props.addstyle}
`;
export default Input;
