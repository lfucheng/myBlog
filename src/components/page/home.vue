<template>
    <div class="home">
        <!-- <div class="content">
            <div id="large-header" class="large-header">
                <canvas id="demo-canvas"></canvas>
                <h1 class="main-title">Connect <span class="thin">Three</span></h1>
            </div>
        </div> -->
        
        <div class="layer">

            <div class="head-img">
                <img src="../../assets/img/0f7487a58df8f5d04c8f878e6227fb49.jpg">
            </div>
            <div class="content">
                <h2>李福成</h2>
                <span>个人站</span>
                <hr />
            </div>
            <div class="foot">
                <p>欢迎来到我的个人网站 *^~^* </p>
                <hr />
                <router-link to="/study">
                    <span>| &nbsp;点我进入 &nbsp;|</span>
                </router-link>
            </div>
            
        </div>
        
    </div>
</template>

<script>

// import TweenLite from '../../assets/js/bgjs/TweenLite.min'
// import EasePack from '../../assets/js/bgjs/EasePack.min'
// import Demo from '../../assets/js/bgjs/demo'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components:{
    // EasePack,
    // TweenLite,
    // Demo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/home.css";
</style>