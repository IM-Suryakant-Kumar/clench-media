import { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

export const media = {
	sm: (styles: Styles<object>) => css`
		@media (max-width: 767px) {
			${css(styles)};
		}
	`,
	lg: (styles: Styles<object>) => css`
		@media (min-width: 768px) {
			${css(styles)};
		}
	`,
};
