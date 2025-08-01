import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
// import { Ubuntu } from "next/font/google";
// const ubuntu = Ubuntu({ subsets: ["cyrillic", "latin"] })

import { HomePage, WorksPage, AboutPage, ErrorPage, RedirectPage, TestPage } from "./pages";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route
                    path="/tg"
                    element={<RedirectPage link='https://t.me/the_g00se'/>}
                />
                <Route
                    path="/github"
                    element={<RedirectPage link='https://t.me'/>}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
