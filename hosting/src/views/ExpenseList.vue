<template>
  <div>
    <h1>{{listObject.name}}</h1>
    <section v-if="listObject.settled">
      <div>diese Liste ist bereits beglichen</div>
    </section>
    <section class="section--left">
      <h2>Zusammenfassung</h2>
      <p>Gesamtausgaben: {{totalListSum}} EUR</p>
      <p>Teilnehmer: {{participants}}</p>
      <Button isLink="true" isPrimary="true">
        <router-link :to="'/settle-list/' + $route.params.expenseListId">Ausgaben begleichen</router-link>
      </Button>
    </section>
    <section>
      <AddExpense />
    </section>
    <section class="section--right">
      <h2>Ausgabenübersicht</h2>
      <ExpenseTable :expenses="subListObject" />
    </section>
    <section>
      <Button isLink="true" isPrimary="true">
        <router-link :to="'/settle-list/' + $route.params.expenseListId">Ausgaben begleichen</router-link>
      </Button>
      <Button @click.native="deleteList" isWarning="true">Ausgabenliste löschen</Button>
    </section>
  </div>
</template>

<script>
import Button from '../components/Button';
import AddExpense from '../components/AddExpense';
import ExpenseTable from '../components/ExpenseTable';
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
    ExpenseTable,
    AddExpense,
  },
  computed: {
    currentListPath: function () {
      return `expense-lists/${this.$route.params.expenseListId}`;
    },
    totalListSum: function () {
      let total = 0;
      this.subListObject.forEach((expense) => {
        if (expense.amount) {
          total += Number(expense.amount);
        }
      });
      return total;
    },
    participants: function () {
      let participants = [];
      this.subListObject.forEach((expense) => {
        if (participants.includes(expense.name)) {
          return;
        }
        participants.push(expense.name);
      });
      return participants.join(', ');
    },
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
          if (item !== this.currentListPath) {
            listsToKeep.push(item);
          }
        });
      localStorage.setItem('myLists', listsToKeep.join(','));
      db.doc(this.currentListPath)
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
    const listObject = db.doc(this.currentListPath);
    const subListObject = listObject
      .collection('expenses')
      .orderBy('date', 'desc');

    this.loading = false;
    console.log(listObject);
    return {
      listObject,
      subListObject,
    };
  },
  mounted() {
    console.log(localStorage.getItem('myLists'));
    if (
      !localStorage.getItem('myLists') ||
      !localStorage.getItem('myLists').includes(this.currentListPath)
    ) {
      const oldListList = localStorage.getItem('myLists');
      localStorage.setItem(
        'myLists',
        [oldListList, this.currentListPath].join(',')
      );
    }
  },
};
</script>

<style>
</style>