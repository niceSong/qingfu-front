<template>
  <div class="i-header">
    <span class="title">SCVR-首页</span>
    <span class="right">
      <el-button round @click="goProject">首页</el-button>
      <el-button round @click="goNews">新闻</el-button>
      <el-button round @click="goProductDes">产品介绍</el-button>
      <el-button round @click="goInstance">案例</el-button>
      <el-button type="warning" round @click="dialogVisible = true">联系我们</el-button>
    </span>

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
      <img src="../contact/QRcode.jpg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="QRcodeDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogVisible: false,
        QRcodeDialogVisible: false,
        flag: true
      }
    },
    methods: {
      goProject () {
        this.$router.push(`/dashboard/projects`)
        this.reflash()
      },
      goProductDes () {
        this.$router.push(`/dashboard/productDes`)
        this.reflash()
      },
      goNews () {
        this.$router.push(`/dashboard/news`)
        this.reflash()
      },
      goInstance () {
        this.$router.push(`/dashboard/instance`)
        this.reflash()
      },
      reflash () {
        this.$router.go(0)
      }
    }
  }
</script>
<style>
  .i-header{
    margin-left: 10%;
    width: 80%;
    height: 80px;
    background-color: white;
    text-align: left;
    background-image: url("header.gif");
    background-repeat: no-repeat;
  }
  .title{
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-right: 5px;
  }
  .right{
    font-size: 30px;
    float: right;
  }
</style>
