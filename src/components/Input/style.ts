import styled from "styled-components";

interface InputContainerProps {
  inputWidth: string;
}

export const InputContainer = styled.input<InputContainerProps>`
  width: ${(props) => `${props.inputWidth}`};
  margin: 5px 5px;
  padding: 5px;
  border: 2px solid var(--lightGrey);
  border-radius: 2px;

  ::placeholder {
    color: var(--lightGrey);
    font-family: var(--roboto);
    font-weight: 500;
  }
`;
