const API = "https://api.themoviedb.org/3"
export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2QwMWNlZTdjMTlhYmFhZTYxNTg2ZjVkM2I2MTRjYSIsInN1YiI6IjYzNjU1OWI0OTY1M2Y2MDA3YWY1NDJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YonPokXFwmCMXErAJt1FKlAh4OthN67p7HC8pZwYzo4",
            "Content-type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json())
}