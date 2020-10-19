<template>
  <div class="footer-background">
    <div class="footer">
      <div class="connect">
        <strong style="color: white">联系我们</strong>
        <span class="line-150px"></span><br>
        <span>
          微信二维码：
            <el-button type="danger" @click="getQRcode" plain>获取</el-button>
          </span><br>
        <span>电话：13996466533</span><br>
        <span>邮箱：tangFord@foxmail.com</span><br>
      </div>
      <div class="aboutUs">
        <strong style="color: white">关于我们</strong>
        <span class="line-50px"></span><br>
        <span>合作伙伴</span><br>
        <span>技术合伙人</span><br>
      </div>
      <div class="news">
        <strong style="color: white">全景新闻</strong>
        <span class="line-50px"></span><br>
        <span>5G和VR</span><br>
      </div>
    </div>

    <el-dialog
      title="微信二维码"
      :visible.sync="QRcodeDialogVisible"
      width="16%">
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
        QRcodeDialogVisible: false
      }
    },
    methods: {
      getQRcode () {
        this.QRcodeDialogVisible = true
      }
    }
  }
</script>

<style>
  .footer-background{
    position: relative;
    background-color: #F39C12;
    width: 100%;
    height:150px;
    margin: 0 auto;
  }
  .footer{
    height:150px;
    margin: 0 auto;
    color: white;
    font-size: 13px;
    font-family: Arial;
  }
  .footer .connect{
    display: inline-block;
    text-align: left;
    line-height:30px;        /*行间距*/
  }
  .footer .aboutUs{
    margin-left:30%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    line-height:30px;        /*行间距*/

  }
  .footer .news{
    margin-left:30%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    line-height:30px;        /*行间距*/
  }
  /*带线*/
  .line-150px{
    display: inline-block;
    width: 150px;
    border-top: 2px solid #ffffff ;
  }
  .line-50px{
    display: inline-block;
    width: 50px;
    border-top: 2px solid #ffffff ;
  }
</style>
