import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { HomePage, WorksPage, AboutPage, ErrorPage, TestPage } from "./pages";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
