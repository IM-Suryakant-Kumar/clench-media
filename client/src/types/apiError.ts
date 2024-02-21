export interface IApiError {
	message: string;
	response: {
		data: {
			success: boolean;
			message: string;
		};
	};
}
