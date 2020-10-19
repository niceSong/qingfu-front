<template>
  <div>
    <i-header></i-header>
    <div>
      <router-view></router-view>
    </div>
    <i-footer></i-footer>
  </div>
</template>
<script>
  import iHeader from '../assets/components/header'
  import iFooter from '../assets/components/footer'
  export default {
    components: {
      iHeader,
      iFooter
    }
  }
</script>
