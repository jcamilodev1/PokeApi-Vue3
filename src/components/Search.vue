<template>
  <!-- <InputText  type="text" class="input__search" placeholder="Search" v-model="text" @keyup="search">  -->
<span class="p-input-icon-left input__search" >
    <i class="pi pi-search" />
    <InputText type="text" class=""  v-model="text" placeholder="Search"  @keyup="search"/>
</span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup(){
    const text = ref('')
    const store = useStore()
    const search = () => {
      store.dispatch('filterPokemon', text.value)
    }
    return {
      text, search
    }
  }
}
</script>

<style lang="scss">
  .input__search{
    width: 80%;
    i{
      font-size: 15px;
      transform: translate(0%, -50%);
      margin-top: 0;
    }
    input{
      width: 100%;
      font-size: 15px;
    }
  }
</style>