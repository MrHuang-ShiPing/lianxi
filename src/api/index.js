import ajax from './ajax'
import mockAjax from './mockAjax'
// 首页三级分类
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList'
    })
}
// /api/cms/banner
// 首页轮播图
export const reqBannerList = ()=>ajax('/cms/banner')
export const reqRecommends =()=>mockAjax('/recommends')
export const reqFloors = ()=>mockAjax('/floors')