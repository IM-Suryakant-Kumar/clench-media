import { useLoaderData } from "react-router-dom";
import { getAllHistoryVideos } from "../utils/api";

export const loader = async () => {
	const data = await getAllHistoryVideos();
	return data.success ? data.historyVideos : null;
};

const History = () => {
	const historyVideos = useLoaderData();
	console.log(historyVideos);

	return <div>History</div>;
};

export default History;
