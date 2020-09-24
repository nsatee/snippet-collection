import { createElement, FC } from "react";
import { ColorType } from "../elements/Theme/colors";
export { ReactComponent as FolderIcon } from "./folder.svg";

type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

enum SizeEnum {
  s = "12",
  m = "16",
  l = "24",
  xl = "32",
}

type PropsType = {
  icon: SVGType;
  dimension?: keyof typeof SizeEnum;
  color?: ColorType;
};

const Icon: FC<PropsType> = ({ icon, dimension = "l", color }) => {
  return createElement(icon, {
    width: dimension,
    height: dimension,
    color,
  });
};

export default Icon;
