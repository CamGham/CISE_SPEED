import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Submission from "./pages/Submission";
import Home from "./pages/Home";
import ArticleDisplay from './pages/ArticleDisplay';
import AnalystDisplay from './pages/AnalystDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createArticle" element={<Submission/>}/>
        <Route path="/showArticles" element={<ArticleDisplay/>}/>
        <Route path="/completed" element={<AnalystDisplay/>}/>
      </Routes>
    </Router>
  );
}

export default App;
