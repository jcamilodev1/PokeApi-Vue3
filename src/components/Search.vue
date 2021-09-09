<template>
  <input type="text" class="input__search" placeholder="Search">

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
    background-position: 10px center;
    background-size: 15px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 14px;
    padding-left: 40px;
    font-family: var(--font);
    outline-color: var(--colorBtn);
    &::placeholder{
      font-size: 16px;
      font-family: var(--font);
      color: #bfbfbf;
    }
  }
</style>