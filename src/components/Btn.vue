<template>
  <router-link :to="url">Get started</router-link>
</template>

<script>
export default {
  name: "btn",
  props: {
    url: {
      type: String,
      default: "/"
    }
  }
}
</script>

<style lang="scss">

  a{
    color: white;    
    background-color: var(--colorBtn);
    padding: 10px 20px;
    border-radius: 15rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-family: var(--font);
    &:hover{
      background-color: var(--colorBtnHover);
    }
  }
</style>