<template>
  <div class="all">
    <div class="background">
      <div class="introduction">
        <p class="introduction-bold">旨在提供最有效的传媒广告，让用户了解您的产品</p>
        <p>首单，免费一组全景拍摄！</p>
        <div class="introduction-button">
          <el-button type="warning" @click="dialogVisible=true">联系我们</el-button>
          <el-button @click="goProductDes">产品介绍</el-button>
        </div>
      </div>
    </div>

    <el-dialog
      title="联系我们"
      :visible.sync="dialogVisible"
      width="16%"
      :before-close="handleClose">
      <span>微信二维码：</span>
      <el-button type="warning" @click="QRcodeDialogVisible = true">获取</el-button><br><br>
      <span>电话：13996466533</span><br><br>
      <span>邮箱：tangFord@foxmail.com</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="微信二维码"
      :visible.sync="QRcodeDialogVisible"
      width="20%">
      <img src="../assets/contact/QRcode.jpg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="QRcodeDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Pano from 'vue-pano'
  export default {
    components: {
      Pano
    },
    data () {
      return {
        dialogVisible: false,
        QRcodeDialogVisible: false
      }
    },
    created () {
      this.search()
    },
    mounted () {
    },
    methods: {
      goNews () {
        this.$router.push(`/dashboard/news`)
      },
      goProductDes () {
        this.$router.push(`/dashboard/productDes`)
      },
      goInstance () {
        this.$router.push(`/dashboard/instance`)
      },
      openDialog () {
        this.$refs.dialog.open()
      }
    }
  }
</script>
<style>
/*.all{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background-size: 100%;*/
/*}*/
.background{
  overflow: hidden;
  height: 1200px;
  background-image: url("../assets/projects/BodyBack.jpg");
  background-size: cover;
}
.introduction {
  width: 25%;
  margin-top: 15%;
  margin-left: 10%;
  text-align: left;
  color: white;
}
.introduction-bold {
  font-size: 33px;
  font-weight: bold;
}
.introduction-button{
  margin-top: 20%;
  height: 200px;
  width: 100%;
  text-align: left;
  vertical-align: middle;

}
</style>
