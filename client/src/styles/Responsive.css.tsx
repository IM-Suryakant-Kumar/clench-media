import { css } from "styled-components";

export const media = {
	sm: (...args) => css`
		@media (max-width: 767px) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (min-width: 768px) {
			${css(...args)};
		}
	`,
};
