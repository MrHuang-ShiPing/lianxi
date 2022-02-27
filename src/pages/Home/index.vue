<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Like/>
    <Rank/>
    <Brand/>
    <Floor v-for="floor in floors" :key='floor.id' :floor='floor'/>
  
  </div>
</template>

<script>
import Like from './Like'
import ListContainer from './ListContainer'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    Like,
 ListContainer,
 Rank,
   Brand,
    Floor

  },
  mounted () {
    this.$store.dispatch('getRecommendsList')
    this.$store.dispatch('getFloors')
  },
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
}
</script>

<style lang="less" scoped>

</style>
