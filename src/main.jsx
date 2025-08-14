import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { Header } from "./components/header";
import { PageLayout } from "./page-layout";

import { Home } from "./components/home";
import { Works } from "./components/works";
import { About } from "./components/about";
import { Test } from "./components/test";
import { Error } from "./components/error";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <PageLayout header={<Header />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </PageLayout>
        </Router>
    </StrictMode>
);
