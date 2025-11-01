//Layout
import {HeaderOnly} from '../components/Layout'

import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
//public routes dùng để lưu trữ các route không cần đăng nhập
const publicRoutes=[
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/search', component: Search, layout:null},
    {path: '/upload', component: Upload, layout: HeaderOnly},

]
//private routes dùng để lưu trữ các route cần đăng nhập
const privateRoutes=[

]
export {publicRoutes,privateRoutes}