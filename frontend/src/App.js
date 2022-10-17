import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Submission from "./pages/Submission";
import Home from "./pages/Home";
import ArticleDisplay from './pages/ArticleDisplay';
import AnalystDisplay from './pages/AnalystDisplay';
import AnalystArticle from './pages/AnalystArticle';
import ModeratorDisplay from './pages/ModeratorDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createArticle" element={<Submission/>}/>
        <Route path="/showArticles" element={<ArticleDisplay/>}/>
        <Route path="/accepted" element={<AnalystDisplay/>}/>
        <Route path="/analyse/:id" element={<AnalystArticle/>}/>
        <Route path="/moderate" element={<ModeratorDisplay/>}/>
      </Routes>
    </Router>
  );
}

export default App;
