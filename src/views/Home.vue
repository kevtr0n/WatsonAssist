<template>
  <div id="div--container">

    <div id="div--mainbox">
      <div class="card hover">
        {{ $store.getters.getIsAnalytical }}
      </div>

      <div class="card hover">
        More Stuff
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../node_modules/carbon-components/css/carbon-components.min.css");
@import url("../style/style.scss");
</style>
