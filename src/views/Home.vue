<template>
  <div id="container">

    <div id="mainbox">
      <div class="bx--tile card">
        Some Stuff
      </div>

      <div class="bx--tile card">
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
#container {
  align-self: center;
  .my-tile {
    align-self: center;
  }
}

.card {
  width: 35%;
  min-height: 250px;
  margin: 10px;
}

#mainbox{
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
