import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Submission from "./pages/Submission";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Submission/>}/>
      </Routes>
    </Router>
  );
}

export default App;
