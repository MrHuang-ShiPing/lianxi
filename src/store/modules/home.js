import {reqCategoryList} from '@/api'

const state = {
    categoryList:[]
}
const mutations = {
    GETLIST(state,CategoryList){
        state.categoryList = CategoryList.splice(0,15)
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