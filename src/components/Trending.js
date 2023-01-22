import { news } from "./data"
import showDate from "./showDate"

export default function Trending() {
    console.log(news)
    return (
        <>
            <div className="sectionContainers">
                <div className="d-flex gap-2">
                    <img src={require("../images/trendingFrame.png")} alt="" style={{ width: "20px", height: "20px" }} />
                    <p style={{ fontWeight: "700", fontSize: "11px" }}>TRENDING ON MEDIUM</p>
                </div>
                <div className="trendingContainer">
                    {
                        news.map((e, index) => {
                            if (e.isTrending)
                                return (
                                    <div className="trendingGeneral">
                                        <div className="trendingNum">{e.id}</div>
                                        <div>
                                            <div className="posted">
                                                <img src={e.createdUser.img} alt="" />
                                                <p className="postedBy">{e.createdUser.Name}</p>
                                            </div>
                                            <h3 className="text2Title">{e.title}</h3>
                                            <div className="dateAndMins">
                                                <span>{showDate(new Date(e.date))}</span>
                                                <span> · </span>
                                                <span> {e.read} </span>
                                                <img src={e.icon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
            <hr></hr>
        </>
    )
}