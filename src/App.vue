<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  text-align: center;
  background: #F9F9F9;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
