import { Login } from "../pages/Login";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";
import { LOGIN_PATH } from "../utilits/consts";

export const publicRoutes = [
    {
        path: LOGIN_PATH,
        component: Login,
        name: 'Login'
    },

];
export const privateRoutes = [
    {
        path: 'posts',
        component: Posts,
        name: 'Posts',
        index: true
    },
    {
        path: 'posts/post/:id',
        component: PostIdPage,
        name: 'PostIdPage'
    },

];