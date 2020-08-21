<template>
  <div>
     <router-link class="link" :to="listPath">{{ listObject.name }}</router-link>
    </div>
</template>

<script>
import { db } from '../main';

export default {
  data() {
    return {
      listObject: null,
    };
  },
  props: {
    listPath: String,
  },
  firestore() {
    console.log(this.listPath)
    const listObject = db.doc(this.listPath);
    this.loading = false;
    return {
      listObject,
    };
  },
};
</script>

<style>
</style>