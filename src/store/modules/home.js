import {reqCategoryList,reqBannerList,reqRecommends,reqFloors} from '@/api'

const state = {
    categoryList:[],
    reqBannerList:[],
    recommends:[],
    floors:[]
}
const mutations = {
    GETLIST(state,CategoryList){
        state.categoryList = CategoryList.splice(0,15)
    },
    REQBANNERLIST(state,reqBannerList){
        state.reqBannerList = reqBannerList
    },
    REQRECOMMENDS(state,recommends){
        state.recommends = recommends
    },
    REQFLOORS(state,floors){
        state.floors = floors
    }
}
// const actions = {
//     async getCategoryList({commit}){
//         const result = await reqCategoryList()
//         if(result.code===200){
//             const CategoryList = result.data
//             commit('GETLIST',CategoryList)
//         }
//     }
// }
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if(result.code===200){
            const CategoryList = result.data
            commit('GETLIST',CategoryList)
        }

    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code===200){
            const reqBannerList = result.data
            commit('REQBANNERLIST',reqBannerList)
        }
    },
    async getRecommendsList({commit}){
        const result = await reqRecommends()
        if(result.code===200){
            const recommends = result.data
            commit('REQRECOMMENDS',recommends)
        }
    },
    async getFloors ({commit}){
        const result = await reqFloors()
        if(result.code===200){
            const floors = result.data
            commit('REQFLOORS',floors)
        }
    }
    
}
const getters = {
    CategoryList(state){
        return state.CategoryList
    }
}
export default  {
    state,
    mutations,
    actions,
    getters
}