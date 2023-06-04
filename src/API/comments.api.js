import axiosInstance from "./axios";

const url = 'https://jsonplaceholder.typicode.com/comments';

export function getPostComments(postId) {
    return axiosInstance.get(`${url}`, {
        params: {
            postId
        }
    });
}

