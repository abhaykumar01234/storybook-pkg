import { type ComponentProps } from "react";
import { cx, css } from "ui/css";

export type RadioProps = Omit<ComponentProps<"input">, "type">;

const radioCSS = css({ accentColor: "darkred", scale: "1.2" });

export const Radio = ({ className = "", ...rest }: RadioProps) => {
  return <input type="radio" className={cx(radioCSS, className)} {...rest} />;
};
