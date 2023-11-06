/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (fn: (...args: any[]) => void, delay: number) => {
	let timerID: number;
	return function () {
		if (timerID) clearTimeout(timerID);
		const context: any = this;
		const args = arguments;
		timerID = setTimeout(() => fn.apply(context, args), delay);
	};
};
