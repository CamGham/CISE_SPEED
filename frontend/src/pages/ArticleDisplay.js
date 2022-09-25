import axios from 'axios';
import React, {useState, useEffect} from 'react';
import TestArticleItem from '../components/TestArticleItem';

const ArticleDisplay = () => {
    const [articles, setArticles] = useState([]);
    let articleList;

    const getArticles = async () =>{
        await axios
        .get('http://localhost:8082/api/articles')
        .then(res => {
            console.log(res.data);
            setArticles(res.data);
            // console.log("DATA: " + res);
            // console.log("ARTICLES: " + articles);
        })
        .catch(err => {
            console.log("error");
        })
    }


    
    useEffect(() =>{
        getArticles();

        // // console.log("Articles: " + articles)
        // if(!articles)
        // {
        //     articleList = "no articles";
        // }else{
           
        //         articleList = articles.forEach((article, index) => {
        //             console.log(article, index);
        //             articleList = <TestArticleItem article={article} index={index}/>
        //         });

        //         articleList = articles.map((article, k) => {
        //             <TestArticleItem article={article} key={k}/>
        //         })
        
        // }


    }, [])

  return (
    <div>
        <h1>Display</h1>
        {articleList}
        {/* {articles && 
        articles.forEach((article, index) => {
            <TestArticleItem article={article} index={index}/>
        })} */}
    </div>
  )
}

export default ArticleDisplay