<template>
    <div class="hobby">
        <common-header></common-header>
        <div id="wish">
            <div>
                <span class="glyphicon glyphicon-zoom-in"></span>
                <img src="../../assets/img/Camera/IMG_20160209_175214.jpg" class="wish-img">
            </div>
            <div>
                <span class="glyphicon glyphicon-zoom-in"></span>
                <img src="../../assets/img/Camera/IMG_20160210_151715.jpg" class="wish-img">
            </div>
            <div>
                <span class="glyphicon glyphicon-zoom-in"></span>
                <img src="../../assets/img/Camera/IMG_20160217_111320.jpg" class="wish-img">
            </div>
            <div>
                <span class="glyphicon glyphicon-zoom-in"></span>
                <img src="../../assets/img/Camera/IMG_20160728_093333.jpg" class="wish-img">
            </div>
        </div>
        <div class="dialog"> 
            <img src="">
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import Jqueryui from '../../assets/js/jquery-ui'
import Wish from '../../assets/js/wish'
import CommonHeader from '../common/CommonHeader'

export default {
  name: 'hobby',
  data () {
    return {
    }
  },
  components:{
    CommonHeader,
    Jqueryui,
    Wish
  },
  mounted(){
    $(document).ready(function(){
        $('#wish').wish();
        $('.wish').draggable({
            containment: "#wish",
            scroll: true
        });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/hobby.css";
</style>