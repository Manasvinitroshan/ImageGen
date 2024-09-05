import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-color:white;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
  border-color:white
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary + 70};
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:focus-within {
    border-color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  border-color: transparent;
  background-color: white;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    outline: none;
  }
  
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;