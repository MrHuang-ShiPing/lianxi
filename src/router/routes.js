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
            meta:{
                isHideFooter:true
            }
        },
        {
            path:'/Register',
            component:Register,
            meta: { 
                isHideFooter:true
             }
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            props:true,  //只能映射pramas参数
        },

]