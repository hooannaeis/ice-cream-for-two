<template>
  <div>
    <h1>{{ listObject.name }}</h1>
    <section v-if="listObject.settled">
      <div>diese Liste ist bereits beglichen</div>
    </section>
    <section class="section--left" v-if="participants.length > 0">
      <h2>Zusammenfassung</h2>
      <p>Gesamtausgaben: {{ totalListSum }} EUR</p>
      <p>Teilnehmer: {{ participants }}</p>
      <Button isLink="true">
        <router-link :to="'/settle-list/' + $route.params.expenseListId"
          >Ausgaben begleichen</router-link
        >
      </Button>
    </section>
    <section class="section--left" v-else>
      <h2>Zusammenfassung</h2>
      <p>
        In dieser Liste sind noch keine Ausgaben eingetragen. Willst du sie
        mit anderen Personen teilen, um gemeinsam daran zu arbeiten?
      </p>
      <p>
        Dazu musst du nur den Link zu dieser Seite kopieren. Sobald deine
        Freunde den Link geklickt haben, sind sie Teil diser Liste.
      </p>
      <CopyToClipboard
        v-if="linkToThisList"
        buttonText="Link kopieren"
        :textToBeCopied="linkToThisList"
      />
    </section>
    <section>
      <AddExpense :participants="participants" />
    </section>
    <section class="section--right">
      <h2>Ausgaben</h2>
      <ExpenseTable :expenses="subListObject" />
    </section>
    <section>
      <Button isLink="true">
        <router-link :to="'/settle-list/' + $route.params.expenseListId"
          >Ausgaben begleichen</router-link
        >
      </Button>
      <Button @click.native="deleteList" isWarning="true">Liste entfernen</Button>
    </section>
  </div>
</template>

<script>
import Button from '../components/Button';
import AddExpense from '../components/AddExpense';
import ExpenseTable from '../components/ExpenseTable';
import CopyToClipboard from '../components/CopyToClipboard';
import { db } from '../main';

export default {
  data() {
    return {
      error: null,
      newExpenseName: '',
      listObject: null,
      subListObject: [null]
    };
  },
  components: {
    Button,
    CopyToClipboard,
    ExpenseTable,
    AddExpense
  },
  computed: {
    linkToThisList: function() {
      return document.location.href;
    },
    currentListPath: function() {
      return `expense-lists/${this.$route.params.expenseListId}`;
    },
    totalListSum: function() {
      let total = 0;
      this.subListObject.forEach(expense => {
        if (expense.amount) {
          total += Number(expense.amount);
        }
      });
      return total;
    },
    participants: function() {
      let participants = [];
      try {
        this.subListObject.forEach(expense => {
          if (participants.includes(expense.name)) {
            return;
          }
          participants.push(expense.name);
        });
        return participants;
      } catch (e) {
        return ['Bisher keine Teilnehmer'];
      }
    }
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
        .forEach(item => {
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
        .catch(err => {
          console.error(err);
          return;
        });
    }
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
      subListObject
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
  }
};
</script>

<style></style>
