import Loadable from 'react-loadable';

import menu from "./menu"
import page404 from "@/pages/index/404"

function loading(){
    return null;
}


const routes = menu.reduce((arr,{pages=[]})=>{
    pages.forEach((item)=>{
        item.exact = true;
        item.component = Loadable({
            loader:item.component,
            loading,
        })
    })

    return arr.concat(pages)
},[]);


// routes.push({
//     path:"/index/login",
//     exact:true,
//     component:Loadable({
//         loader:()=>import("@/pages/index/Login"),
//         loading
//     }),
// })
routes.push({
    component:page404
})

export default routes