<template>
  <div>
    <h1>{{ listObject.name }}</h1>
    <section v-if="listObject.settled">
      <div>diese Liste ist bereits beglichen</div>
    </section>
    <section class="section--left" v-if="participants.length > 1">
      <h2>Zusammenfassung</h2>
      <p>Gesamtausgaben: {{ totalListSum }} EUR</p>
      <p>Teilnehmer: {{ participants }}</p>
      <router-link :to="'/settle-list/' + $route.params.expenseListId">
        <Button isBright="true">
          Ausgaben begleichen
        </Button>
      </router-link>
    </section>
    <section class="section--left" v-else>
      <h2>Zusammenfassung</h2>
      <p>
        Du allein scheinst von dieser Liste zu wissen. Willst du sie mit anderen
        Personen teilen, um gemeinsam Ausgaben einzutragen?
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
    <section class="section--right">
      <AddExpense :participants="participants" />
    </section>
    <section class="section--left">
      <h2>Ausgaben</h2>
      <ExpenseTable :expenses="subListObject" />
    </section>
    <section>
      <router-link
        :to="'/settle-list/' + $route.params.expenseListId"
        v-if="participants.length > 1"
      >
        <Button isBright="true">
          Ausgaben begleichen
        </Button>
      </router-link>
      <AreYouSureExecute
        @acceptDecision="deleteList"
        acceptText="wirklich entfernen"
        declineText="abbrechen"
      >
        <Button isWarning="true">Liste entfernen</Button>
      </AreYouSureExecute>
    </section>
  </div>
</template>

<script>
import Button from '../components/Button';
import AddExpense from '../components/AddExpense';
import ExpenseTable from '../components/ExpenseTable';
import AreYouSureExecute from '../components/AreYouSureExecute';
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
    AreYouSureExecute,
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
      return total.toFixed(2);
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
  },
};
</script>

<style></style>
