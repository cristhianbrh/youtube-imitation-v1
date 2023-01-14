import { VideoRecommendation } from "../../components/videoRecommendation/VideoRecommendation";
import "./PrincipalContainer.css";
export const PrincipalContainer = () => {
    return (
        <>
            <div className="PrincipalContainer">
                <div className="categoriesCont">
                    <div>
                        <button>Todos</button>
                        <button>Videojuegos</button>
                    </div>
                </div>
                <div className="videoListContainer">
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                    <VideoRecommendation/>
                </div>
            </div>
        </>
    )
}