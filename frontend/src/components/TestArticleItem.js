import React from 'react'

const TestArticleItem = (props) => {
    const article = props.article;
    // const key = props.key;
  return (
    <div>
        <h3>{article.title}</h3>
        <h3>{article.authors}</h3>
        <h3>{article.year}</h3>
    </div>
  )
}

export default TestArticleItem