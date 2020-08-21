<template>
  <div>
    <h1>{{listObject.name}}</h1>
    <section class="divider--top">
      <h2>Ausgaben eintragen</h2>
      <div v-if="error" class="error">{{error}}</div>
      <input
        type="text"
        id="newExpenseName"
        v-model="newExpenseName"
        placeholder="Beschreibe deine Ausgaben"
      />
      <Button @click.native="createExpense" buttonText="+"></Button>
    </section>
    <section class="divider--top">
      <h2>Ausgaben</h2>
      <div v-if="subListObject.length > 0">
        <div v-for="(subList, subListIndex) in subListObject" :key="subListIndex">{{ subList }}</div>
      </div>
      <div v-else>Du hast noch keine Ausgaben eingetragen.</div>
    </section>
    <Button @click.native="deleteList" buttonText="Ausgabenliste löschen"></Button>
  </div>
</template>

<script>
import Button from '../components/Button';
import { db } from '../main';

export default {
  data() {
    return {
      error: null,
      newExpenseName: '',
      listObject: null,
      subListObject: [null],
    };
  },
  components: {
    Button,
  },
  methods: {
    createExpense() {
      if (!this.newExpenseName) {
        this.error = 'Bitte beschreibe deine Ausgabe';
        return;
      }
      console.log('hello');
    },
    deleteList() {
      let listsToKeep = [];
      localStorage
        .getItem('myLists')
        .split(',')
        .forEach((item) => {
          if (item !== `expense-lists/${this.$route.params.expenseListId}`) {
            listsToKeep.push(item);
          }
        });
      localStorage.setItem('myLists', listsToKeep.join(','));
      db.doc(`expense-lists/${this.$route.params.expenseListId}`)
        .delete()
        .then(() => {
          this.$router.push({ path: '/' });
        })
        .catch((err) => {
          console.error(err);
          return;
        });
    },
  },
  firestore() {
    console.log(this.$route.params.expenseListId);
    const listObject = db.doc(
      `expense-lists/${this.$route.params.expenseListId}`
    );
    const subListObject = listObject.collection('expenses');

    this.loading = false;
    console.log(listObject);
    return {
      listObject,
      subListObject,
    };
  },
};
</script>

<style>
</style>