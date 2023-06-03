import { NotFound } from "../pages/NotFound";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";

export const routes = [
    {
        path: '/posts',
        component: Posts,
        name: 'Posts',
        index: true
    },
    {
        path: 'posts/post/:id',
        component: PostIdPage,
        name: 'PostIdPage'
    },
    {
        path: 'notFound',
        component: NotFound
    }
]

export const publicRoutes = [];
export const privateRoutes = [];