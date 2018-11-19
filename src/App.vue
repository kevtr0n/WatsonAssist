<template>
  <div id="app">
    <header id="#header" :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + ibm_watson + ')' }">

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/tone-analyzer">Tone Analyzer</router-link>
      </div>

      <div id="intro-text-box">
        <h1>Watson Assist</h1>
      </div>

    </header>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      ibm_watson: 'https://marketingland.com/wp-content/ml-loads/2016/06/ibm-watson-black-1920.png',
      ibm_watson_dark: 'http://www.modafinilsale.com/data/out/740/228118634-ibm-watson-wallpaper.jpg'
    }
  }
}
</script>


<style lang="scss">
@import url("./style/style.scss");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e0dede;
}

#intro-text-box {
  position: relative;
  float: left;
  margin-left: 20px;
  top: 70%;
  h1 {
    color: #fff;
    font-size: 270%;
    font-weight: 100;
    text-transform: uppercase;
  }
}

#nav {
  text-transform: uppercase;
  padding: 15px;
  color: #fff;
  float: right;
  font-size: 80%;
  font-weight: 100;
  a {
    margin: 10px;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:link,
  a:visited {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.5s;
  }

  a:hover,
  a:active {
    border-bottom: 2px solid #42b983;
  }
}

#container {
  display: flex;
  flex-direction: column;
}

header {
  background-size: cover;
  background-position: center;
  height: 40vh;
}
</style>
