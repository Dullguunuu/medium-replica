import React from 'react'
import showDate from './showDate'

export default function Posts({ news }) {
    return (
        <>
            {
                news.map((e) => {
                    if (!e.isTrending)
                        return (
                            <div className="notTrendingNews">
                                <div>
                                    <div className="posted">
                                        <img src={e.createdUser.img} alt="" />
                                        <p className="postedBy">{e.createdUser.Name}</p>
                                    </div>
                                    <h3 style={{ fontSize: "21px", fontWeight: "700" }}>{e.title}</h3>
                                    <p style={{ fontSize: "15px", fontWeight: "400", color: "#757575" }}>{e.body}</p>
                                    <div style={{ fontSize: "12px", fontWeight: "400", color: "#757575" }}>
                                        <span>{showDate(new Date(e.date))}</span>
                                        <span> · </span>
                                        <span>{e.read}</span>
                                        <span> · </span>
                                        <span className="categories">{e.category}</span>
                                        <img src={e.con} alt="" />
                                    </div>
                                </div>
                                <img src={e.img} alt="" />
                            </div>
                        )
                })
            }
        </>
    )
}
