<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Like/>
    <Rank/>
    <Brand/>
    <Floor/>
  
  </div>
</template>

<script>
import Like from './Like'
import ListContainer from './ListContainer'
import Rank from './Rank'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  components:{
    Like,
 ListContainer,
 Rank,
   Brand,
    Floor

  }
}
</script>

<style lang="less" scoped>

</style>
