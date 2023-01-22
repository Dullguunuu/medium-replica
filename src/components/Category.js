import React from 'react'

export default function Category({ filterCategory }) {
    const categories = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relationships", "Machine Learning", "Productivity", "Politics"];

    return (
        <div style={{ width: "400px", marginLeft: "100px" }}>
            <h3 style={{ fontWeight: "700", fontSize: "11px", textTransform: "uppercase", marginBottom: "25px" }}>Discover more of what matters to you</h3>
            <div>
                {
                    categories.map((e) => (
                        <button className="btn btn-outline-secondary m-1" onClick={() => filterCategory(e)} style={{ fontWeight: "400", fontSize: "13px" }}>{e}</button>
                    ))
                }
            </div>
            <hr style={{ marginTop: "25px" }}></hr>
        </div>
    )
}
