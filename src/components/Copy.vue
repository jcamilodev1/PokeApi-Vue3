<template>
  <button>Share to my friends</button>
</template>

<script>
export default {
  name: "copy",
}
</script>

<style lang="scss">

  button{
    color: white;    
    background-color: var(--colorBtn);
    padding: 10px 20px;
    border-radius: 15rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-family: var(--font);
    font-weight: 600;
    border: none;
    cursor: pointer;
    &:hover{
      background-color: var(--colorBtnHover);
    }
  }
</style>