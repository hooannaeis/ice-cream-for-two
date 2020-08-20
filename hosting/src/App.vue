<template>
  <div id="app">
    <div class="app__container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Footer,
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  justify-items: center;
  min-height: 98vh;
  max-width: 100vw;
  overflow-x: hidden;
  background: rgb(43, 90, 144);
  background: radial-gradient(
    circle,
    rgba(43, 90, 144, 1) 0%,
    rgba(125, 168, 223, 1) 100%
  );
}

.app__container {
  width: min(90vw, 500px);
  min-height: 50vh;
  background: #e7be7e;
  background: radial-gradient(circle, #c4a26b 0%, #ffdb91 100%);
  border-radius: 6rem;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
