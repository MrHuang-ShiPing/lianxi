import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default[
        {
            path:'/',
            component:Home,
        },
        {
            path:'/Login',
            component:Login,
        },
        {
            path:'/Register',
            component:Register,
        },
        {
            name:'search',
            path:'/Search/:keyWord',
            component:Search,
            //props:true,  //只能映射pramas参数
        },
]