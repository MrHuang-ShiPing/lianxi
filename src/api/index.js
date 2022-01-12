import ajax from './ajax'
// 首页三级分类
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList'
    })
}