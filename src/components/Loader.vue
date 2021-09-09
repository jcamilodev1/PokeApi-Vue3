<template>
  <section class="container">
    <article class="container__loader">
      <picture class="">
        <img src="../assets/img/Loader.svg" alt="Pokemon" title="Pokemon" class="bounce">
      </picture>
    </article>


  </section>

</template>

<script>
export default {
  name: "Seacher"
}
</script>

<style lang="scss">
  .container__loader{
      position: relative;
      overflow: hidden;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }
.bounce {
  animation: bounce 2s ease infinite;
}
@keyframes bounce{
	0%, 
  20%, 
  50%, 
  80%, 
  100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}

</style>