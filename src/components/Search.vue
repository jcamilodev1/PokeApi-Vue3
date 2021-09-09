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
    border: none;
    font-family: var(--font);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    padding: 14px;
    outline-color: var(--colorBtn);
    &::placeholder{
      font-size: 16px;
      font-family: var(--font);
    }
  }
</style>