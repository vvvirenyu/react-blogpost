import React from 'react'
import { Link } from 'react-router-dom'


const ArticleListComponent = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link to={`/article/${article.name}`} key={key}>
                <h3> {article.title} </h3>
                <p> {article.content.substring(0, 50)}...</p>
            </Link>
        ))}
    </>
)

export default ArticleListComponent;