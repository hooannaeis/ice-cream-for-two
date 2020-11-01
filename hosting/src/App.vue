<template>
  <div id="app">
    <div class="app__container">
      <router-view style="width:100%" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Footer
  }
};
</script>

<style>
@font-face {
  font-family: "ShinySignature";
  src: local("ShinySignature"),
   url(./assets/fonts/ShinySignature.ttf) format("truetype");
}

@font-face {
  font-family: "CaviarDreams";
  src: local("CaviarDreams"),
   url(./assets/fonts/CaviarDreams.ttf) format("truetype");
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'CaviarDreams', sans-serif;
  line-height: 1.7;
  color: #2e2d2d;
  background: linear-gradient(145deg, #b0b0b0, #d2d2d2);
}

h1,
h2 {
  font-family: 'ShinySignature', cursive;
  color: #2e2d2d;
  padding: 0.2rem;
  margin: 0;
  margin-top: 0.5rem;
  text-transform: uppercase;
}

.error {
  color: #b94d62 !important;
}

.success {
  color: rgba(1, 168, 223, 1) !important;
}

input[type='text'],
input[type='number'] {
  border: none;
  border-bottom: 1px solid black;
  padding: 0.8rem;
  margin: 0;
  margin-bottom: 1rem;
  background: transparent;
}

ul {
  text-align: left;
  padding: 0.5rem;
}
li {
  list-style: none;
  border-bottom: 1px dashed black;
  padding: 0.2rem 0;
}

section {
  padding: 0.3rem;
  margin-bottom: 0.5rem;
}
.section--right {
  margin-right: 1rem;
  background: #eeb965;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

.section--left {
  margin-left: 1rem;
  background: #e2b865;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  justify-items: center;
  min-height: 95vh;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 1rem;
  background: rgb(43, 90, 144);
  background: radial-gradient(
    circle,
    rgba(43, 90, 144, 1) 0%,
    rgba(1, 168, 223, 1) 100%
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
  overflow: hidden;
}
</style>
