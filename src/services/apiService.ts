import request from "request";

export async function getReposByUsername(username: string) {
    request(`http://api.github.com/users/${username}/repos`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
    });
}