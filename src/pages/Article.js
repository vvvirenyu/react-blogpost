import React, { Component } from 'react'
import articleContent from './Article-content'
import ArticleListComponent from '../components/ArticleListComponent';

const Article = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const otherArticle = articleContent.filter(article => article.name !== name);
    if (!article) return <h1> You let me fall!</h1>

    return (
        <>
            <h1> {article.title} </h1>
            {article.content}
            <h3> Other Articles: </h3>
            <ArticleListComponent articles={otherArticle}/>
        </>
    );
}

export default Article;
