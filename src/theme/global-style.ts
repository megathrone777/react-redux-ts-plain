import { base } from "./global/base";
import { fonts } from "./global/fonts";
import { reset } from "./global/reset";
import { createGlobalStyle } from "~/theme";

const GlobalStyle = createGlobalStyle`
	${fonts}
	${reset}
	${base}
`;

export { GlobalStyle };
