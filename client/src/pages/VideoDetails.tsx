import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getSingleVideo } from "../utils/api";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const data = await getSingleVideo({ params } as LoaderFunctionArgs);
	return data.success ? data.video : null;
};

const VideoDetails = () => {
    const Video = useLoaderData()
    console.log(Video)
	return <div>VideoDetails</div>;
};

export default VideoDetails;
