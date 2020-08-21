<template>
  <button>{{buttonText}}</button>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
};
</script>

<style>
button {
  font-size: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  margin: auto;
  border: none;
  min-width: 2.5rem;
  padding: 0.3rem;
  color: #e7be7e;
  border-radius: 50px;
  background: #2c2a26;
  box-shadow: -20px 20px 60px #252420, 20px -20px 60px #33302c;
}
</style>