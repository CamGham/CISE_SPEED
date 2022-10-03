import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Submission from "./pages/Submission";
import Home from "./pages/Home";
import ArticleDisplay from './pages/ArticleDisplay';
import ArticleApprove from './pages/ArticleApprove';
import NewArticleApprove from './pages/NewArticleApprove';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createArticle" element={<Submission/>}/>
        <Route path="/showArticles" element={<ArticleDisplay/>}/>
        <Route path="/articleApprove" element={<ArticleApprove/>}/>
        <Route path="/newArticleApprove" element={<NewArticleApprove/>}/>
      </Routes>
    </Router>
  );
}

export default App;
