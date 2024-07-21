import { Route, Routes } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import Author from "./components/author/AuthorPage";
import Blog from "./components/blog/BlogPage";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/authors/:slug" element={<Author />} />
                    <Route path="/blogs/:slug" element={<Blog />} />
                </Routes>
        </Layout>
    );
}

export default App;
