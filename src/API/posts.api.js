import axiosInstance from "./axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export function getPosts(limit = 10, page = 1) {
    return axiosInstance.get(`${url}`, {
        params: {
            _limit: limit,
            _page: page
        }
    });
}