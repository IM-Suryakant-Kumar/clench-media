import { useLoaderData } from "react-router-dom"
import { getAllSavedVideos } from "../utils/api"

export const loader = async () => {
    const data = await getAllSavedVideos()
    return data.success ? data.savedVideos : null
}

const Save = () => {
    const savedVideos = useLoaderData()
    console.log(savedVideos)

  return (
    <div>Save</div>
  )
}

export default Save