import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ArticleDisplay = () => {
    const [articles, setArticles] = useState([]);


    const getArticles = async () =>{
        axios.get('http://localhost:8082/api/articles')
        .then(res => {
            setArticles(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log("error");
        })
    }


    let articleList;
    useEffect(() =>{
        getArticles();

       
    }, [])

  return (
    <div>
        <h1>Display</h1>
    </div>
  )
}

export default ArticleDisplay