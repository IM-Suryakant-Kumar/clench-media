export const debounce = (fn: () => void, delay: number) => {
	let timerID: number;
	return function () {
		// eslint-disable-next-line @typescript-eslint/no-this-alias, prefer-rest-params
		const context = this, args = arguments;
        if (timerID) clearTimeout(timerID);
		timerID = setTimeout(() => fn.apply(context, args), delay);
	};
};
