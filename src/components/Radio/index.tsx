import { type ComponentProps } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "type">;

export const Radio = ({ style = {}, ...rest }: RadioProps) => {
  return (
    <input
      type="radio"
      style={{ ...style, accentColor: "darkred", scale: "1.2" }}
      {...rest}
    />
  );
};
