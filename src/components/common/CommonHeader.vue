<template>
<div class="header">
    <div class="wrapper">
      <span>李福成的博客</span>
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/study">学海无涯</router-link></li>
        <li><router-link to="/hobby">我的画册</router-link></li>
        <li>个人随笔</li>
        <li>二次元</li>
        <li>关于我</li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #fff;
    /*background: #fff;*/
}
.header span{
    float: left;
    font-size: 25px;
}
.header ul{
    float: right;
}
.header li{
    float: left;
    font-size: 18px;
    margin: 0 10px;
}
.wrapper{
    width: 1000px;
    margin: 0 auto;
}
</style>