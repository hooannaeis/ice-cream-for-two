<template>
  <Button isLink="true">
    <router-link class="link" :to="listPath">{{ listObject.name }}</router-link>
  </Button>
</template>

<script>
import Button from '../components/Button'
import { db } from '../main';

export default {
  data() {
    return {
      listObject: null,
    };
  },
  components: {
    Button
  },
  props: {
    listPath: String,
  },
  firestore() {
    console.log(this.listPath);
    const listObject = db.doc(this.listPath);
    this.loading = false;
    return {
      listObject,
    };
  },
};
</script>

<style>

a {
  color: black;
  text-decoration: none;
}
</style>