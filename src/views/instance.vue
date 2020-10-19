<template>
  <div class="instance-body">
    <p class="titleI">
      <strong>全景实例</strong>
    </p>
    <p class="instance-text">
      请点击图片展示全景图，再次点击图片收起全景图。<br>
      展示的全景图仅为公司提供的部分服务。实际还包含有语音、音乐、文字和生成二维码等内容。
    </p>
    <p class="titleII">
      <strong>湖边夜景</strong>
    </p>
    <img src="../../static/example1/right.jpg" style="cursor: pointer;" title="点击查看全景图" @click="isVR_1" width="300" height="200">
    <div v-if="vrVisible_1 === true">
      <pano title="" width="1200px" height="500px" bundle="/static/example1/" format="jpg"></pano>
    </div>

    <p class="titleII">
      <strong>民宿酒店</strong>
    </p>
    <img src="../../static/example2/right.jpg" style="cursor: pointer;" title="点击查看全景图" @click="isVR_3" width="300" height="200">
    <div v-if="vrVisible_3 === true">
      <pano title="" width="1200px" height="500px" bundle="/static/example2/" format="jpg"></pano>
    </div>

    <p class="titleII">
      <strong>旅游景点</strong>
    </p>
    <img src="../../static/example/right.jpg" style="cursor: pointer;" title="点击查看全景图" @click="isVR_2" width="300" height="200">
    <div v-if="vrVisible_2 === true">
      <pano title="" width="1200px" height="500px" bundle="/static/example/" format="jpg"></pano>
    </div>
  </div>
</template>

<script>
  import Pano from 'vue-pano'
  export default {
    data () {
      return {
        vrVisible_1: false,
        vrFlag_1: 0,
        vrVisible_2: false,
        vrFlag_2: 0,
        vrVisible_3: false,
        vrFlag_3: 0
      }
    },
    mounted () {
    },
    components: {
      Pano
    },
    methods: {
      isVR_1 () {
        if (this.vrFlag_1 === 0) {
          this.vrVisible_1 = true
          this.vrFlag_1 = 1
        } else if (this.vrFlag_1 === 1) {
          this.vrVisible_1 = false
          this.vrFlag_1 = 0
        }
      },
      isVR_2 () {
        if (this.vrFlag_2 === 0) {
          this.vrVisible_2 = true
          this.vrFlag_2 = 1
        } else if (this.vrFlag_2 === 1) {
          this.vrVisible_2 = false
          this.vrFlag_2 = 0
        }
      },
      isVR_3 () {
        if (this.vrFlag_3 === 0) {
          this.vrVisible_3 = true
          this.vrFlag_3 = 1
        } else if (this.vrFlag_3 === 1) {
          this.vrVisible_3 = false
          this.vrFlag_3 = 0
        }
      }
    }
  }
</script>

<style>
  .instance-body{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
  }
  .titleI{
    font-size: 30px;         /*字体大小*/
    text-align: left;        /*左对齐*/
    font-family: Helvetica;      /*字体*/
    color: black;          /*字色*/
  }
  .titleII{
    font-size: 25px;         /*字体大小*/
    text-align: left;        /*左对齐*/
    font-family: Helvetica;      /*字体*/
    color: black;          /*字色*/
  }
  .instance-text{
    font-size: 16px;         /*字体大小*/
    text-align: left;        /*左对齐*/
    font-family: Arial;      /*字体*/
    color: red;          /*字色*/
  }
</style>
