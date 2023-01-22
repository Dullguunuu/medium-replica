import React, { useState } from 'react'
import Category from "./Category"
import Footer from "./Footer"
import Posts from './Posts'
import { news } from './data'

export default function Main({ posts }) {

    const [filteredNews, setFilteredNews] = useState(news);

    function filterCategory(categoryName) {
        return (
            setFilteredNews(news.filter((e) => e.category === categoryName))
        )
    }

    return (
        <div className="sectionContainers d-flex" style={{ margin: "70px auto" }}>
            <div className="newsLeft">
                <Posts
                    news={filteredNews}
                />
            </div>
            <div className="newsRight">
                <Category filterCategory={filterCategory} />
                <Footer />
            </div>
        </div>
    )
} 
