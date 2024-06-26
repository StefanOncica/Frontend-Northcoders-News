import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import ArticleBodyById from "./components/ArticleBodyById";

function App() {
  const [user, setUser] = useState();
  const [articleId, setArticleId] = useState()
  

  return (
    <main>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/articles"
            element={<AllArticles user= {user} setArticleId={setArticleId} />}
          />

          <Route
            path="/articles/:id"
            element={<ArticleBodyById user={user}  />}
          />
        </Routes>
        
      </BrowserRouter>
    </main>
  );
}

export default App;
