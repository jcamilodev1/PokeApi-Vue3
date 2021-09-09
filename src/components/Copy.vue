<template>
  <div>
    <button  @click="data()">Share to my friends</button>
  </div>
</template>

<script>
export default {
  name: "copy",
  props: ['pokemon'],
  setup(props){
    const data = () => {
      const pokemon = props.pokemon
      let text
      let types = []
    pokemon.types.forEach(element => {
        types.push(element.type.name)
    });
      text = `Name: ${pokemon.name},Weight:  ${pokemon.weight}, Height: ${pokemon.height}, Types: ${types.toString()}`
      navigator.clipboard.writeText(text)
    }
    return{data}
  }
}
</script>

<style lang="scss">

  button{
    width: auto;
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