import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  background-color: #26272a;
  border-radius: 15px;
  padding: 20px;
  width: 25%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Label = styled.label`
  margin: 5px;
`

export const TextInput = styled.input`
  color: white;
  background-color: #2e3136;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 5px;
  width: 75%;
`

export const Button = styled.button`
  color: white;
  background-color: #2e3136;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;