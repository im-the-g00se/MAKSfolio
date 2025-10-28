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
import { AddWorks } from "./components/add-works";

const basePath = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <PageLayout header={<Header />}>
                <Routes>
                    <Route path={basePath + "/"} element={<Home />} />
                    <Route path={basePath + "/works"} element={<Works />} />
                    <Route path={basePath + "/about"} element={<About />} />
                    <Route path={basePath + "/test"} element={<Test />} />
                    <Route path={basePath + "/add-works"} element={<AddWorks />} />
                    <Route path={basePath + "*"} element={<Error />} />
                </Routes>
            </PageLayout>
        </Router>
    </StrictMode>
);