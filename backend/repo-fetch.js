import { Octokit } from "octokit";

import dotenv from "dotenv";
dotenv.config();

const octokit = new Octokit({
    auth: process.env.TOKEN,
});

export async function fetchRepos() {
    const data = await octokit.request("GET /users/{owner}/repos", {
        owner:  process.env.GH_USERNAME,
    });
    const promises = data.data.map(handleRepo);
    return Promise.all(promises);
}

async function handleRepo(repo) {
    try {
        // getting encoded info.json file
        const rawInfo = await requestFile(repo.name, "info.json");
        // decoding the file
        const decodedInfoString = Buffer.from(
            rawInfo.data.content,
            "base64",
        ).toString("utf8");
        // parsing the file
        const info = JSON.parse(decodedInfoString);
        if (info.isMiniProject) {
            // if repo is for mini project, only one preview image exists
            return {
                ...info,
                url: repo.html_url,
                imgUrl: `https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${repo.name}/main/portfolio_info/preview.png`
            };
        } else {
            return {
                ...info,
                url: repo.html_url,
                imgDesktopUrl: `https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${repo.name}/main/portfolio_info/preview_desktop.png`,
                imgMobileUrl: `https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${repo.name}/main/portfolio_info/preview_mobile.png`
            };
        }

    } catch {
        console.log("Couldn't get additional information");
        return undefined;
    }
}

async function requestFile(repo, filename) {
    const file = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
            owner:  process.env.GH_USERNAME,
            repo: repo,
            path: "portfolio_info/" + filename,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        },
    );
    return file;
}
