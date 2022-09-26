import axios from 'axios';
import React, {useState, useEffect} from 'react';
import TestArticleItem from '../components/TestArticleItem';
import {Link} from "react-router-dom";

const ArticleDisplay = () => {
    const [articles, setArticles] = useState([]);
    // let articleList = useRef();

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
        // articleList.current = "no articles";


    }, [])

  return (
    <div>
        <h1>Display</h1>
        <div>
        <Link to="/">
            Home
        </Link>
        </div>
        {/* {articleList} */}
        {articles && 
        articles.forEach((article, index) => {
            console.log(article);
            console.log(index);
            <TestArticleItem article={article} index={index}/>
            console.log("craeted");
        })}
    </div>
  )
}

export default ArticleDisplay