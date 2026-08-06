import express from "express";
const app = express();
const port = 3000;

import { fetchRepos } from "./repo-fetch.js";

app.get("/check", (req, res) => {
    try {
        console.log("Connection checked");
        res.status(201).json({
            message: "Check successful",
        });
    } catch (error) {
        console.error("Check error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/repos", async (req, res) => {
    try {
        const repos = await fetchRepos();
        res.status(201).json(repos);
    } catch (error) {
        console.error("Repo error:", error);
        res.status(500).json(error);
    }
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
