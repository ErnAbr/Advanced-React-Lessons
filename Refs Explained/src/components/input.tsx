import { ForwardedRef, forwardRef } from "react";

type Props = {
  changeHandler: (val: string) => void;
};

const Input = (
  { changeHandler }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
      type="text"
      name="username"
      onChange={(e) => changeHandler(e.target.value)}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
