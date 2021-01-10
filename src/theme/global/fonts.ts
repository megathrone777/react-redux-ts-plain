import { css } from "~/theme";
import RobotoTtf from "../../../public/fonts/Roboto-Regular.ttf";

const fonts = css`
  @font-face {
    font-family: "Roboto";
    src: url("${RobotoTtf}");
  }
`;

export { fonts };
