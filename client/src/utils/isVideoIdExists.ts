const isVideoIdExists = (videoIds: string[], videoId: string) => {
	return videoIds.includes(videoId);
};

export default isVideoIdExists;
