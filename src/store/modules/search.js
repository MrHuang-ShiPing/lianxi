import {reqSearch} from '@/api'

const state = {
    searchList:{}
} 
const mutations = {

    // GETSEARCHLIST(state,searchList){
    //     state.searchList = searchList
    // }
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}

const actions = {
    // async getSearchList({commit},searchList){
    //     const result = await reqSearch(searchList)
    //     if(result.code===200){
    //         const searchList = result.data
    //         commit('GETSEARCHLIST',searchList)
    //     }
    // }
    async getSearchList({commit},searchList){
        const result = await reqSearch(searchList)
        if(result.code===200){
            const searchList = result.data
            commit('GETSEARCHLIST',searchList)
        }
    }
    
}
const getters = {
  goodsList(state){
      return state.searchList.goodsList
      
  }
}
export default  {
    state,
    mutations,
    actions,
    getters
}