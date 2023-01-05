import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import { InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { inputWidth, ...rest },
  ref
) => {
  return <InputContainer inputWidth={inputWidth} {...rest} ref={ref} />;
};

export const Input = forwardRef(InputBase);
