<template>
  <input type="text" class="input__search" placeholder="Pokemon">

</template>

<script>
export default {

}
</script>

<style lang="scss">
  .input__search{
    width: 80%;
    background-image: url("../assets/img/Lens.svg");
    background-repeat: no-repeat;
    background-position: 5% center;
    background-size: 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    padding: 14px;
    padding-left: 40px;
    font-family: var(--font);
    outline-color: var(--colorBtn);
    &::placeholder{
      font-size: 16px;
      font-family: var(--font);
      color: var(--colorTile);
    }
  }
</style>