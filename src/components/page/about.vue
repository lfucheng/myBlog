<template>
    <div class="about">
        <common-header></common-header>
        <div class="content">
            
        </div>
    </div>
</template>

<script>
// import $ from 'jquery'
// import Jqueryui from '../../assets/js/jquery-ui'
// import Wish from '../../assets/js/wish'
import CommonHeader from '../common/CommonHeader'

export default {
  name: 'about',
  data () {
    return {
    }
  },
  components:{
    CommonHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/about.css";
</style>