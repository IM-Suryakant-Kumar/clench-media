import { Await, LoaderFunctionArgs, defer, useLoaderData } from "react-router-dom";
import { getLatestVideos } from "../utils/youtubeApi";
import { Suspense, useState } from "react";
import Videos from "../components/Videos";
import { categories } from "../utils/constant";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: LoaderFunctionArgs) => {
	return defer({ videos: getLatestVideos({ request } as LoaderFunctionArgs) });
};

export type IVideo = {
	id: {
		kind: string;
		videoId?: string;
		channelId?: string;
	};
	kind: string;
	snippet: {
		channelId: string;
		channelTitle: string;
		description: string;
		liveBroadcastContent: string;
		publishTime: string;
		publishedAt: string;
		thumbnails: {
			default: {
				hight: number;
				url: string;
				width: number;
			};
			high: {
				hight: number;
				url: string;
				width: number;
			};
			medium: {
				hight: number;
				url: string;
				width: number;
			};
		};
		title: string;
	};
};

const Home = () => {
	const [cat, setCat] = useState<string>(categories[0]);

	const loaderData = useLoaderData();
	// console.log(loaderData);

	// const filterCategories = categories.map((cat))

	const renderVideos = (videos: IVideo[]) => {
		// const filterVideos = videos.filter((video) => video.id.videoId);

		return (
			<Container>
				<CatCont>
					{categories.map((item, idx) => (
						<NavLink to={`/videos/${item}`}>
							<FilterTitle key={idx}>{item}</FilterTitle>
						</NavLink>
					))}
				</CatCont>
				{/* <Videos videos={filterVideos} /> */}
			</Container>
		);
	};

	return (
		<Suspense fallback={<h3>Loading...</h3>}>
			<Await resolve={loaderData?.videos}>{renderVideos}</Await>
		</Suspense>
	);
};

export default Home;
