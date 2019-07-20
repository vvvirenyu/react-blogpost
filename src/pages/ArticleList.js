import React, { Component } from 'react'
import articleContent from './Article-content'
import ArticleListComponent from '../components/ArticleListComponent'

const ArticleList = () => (
    <>
        <h1> Articles </h1>
        <ArticleListComponent articles={articleContent} />
    </>
)

export default ArticleList;