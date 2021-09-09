<template>
  <nav class="nav">
    <btn-icon></btn-icon>
  </nav>

</template>

<script>
import btnIcon from './btnIcon.vue'
export default {

  components: { btnIcon },

}
</script>

<style lang="scss">
  .nav{
    padding: 20px;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    button{
      &:first-child{
        margin-right: 20px;
      }
    }
  }
</style>