import SignUp from './components/Resturant/SignUp';
import Home from './components/Resturant/Home';
import LogIn from './components/Resturant/LogIn';
import Loop from './components/Loop';
import formSet from './components/Forms';
import {createRouter,createWebHistory} from 'vue-router';

const routes=[
    {
    name: 'home',
    component:Home,
    path:'/'
},
    {
    name: 'signup',
    component:SignUp,
    path:'/signup'
},
    {
    name: 'login',
    component:LogIn,
    path:'/login'
},
    {
    name: 'loop',
    component:Loop,
    path:'/loop'
},
    {
    name: 'form',
    component:formSet,
    path:'/form'
},
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;