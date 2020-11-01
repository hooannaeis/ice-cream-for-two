<template>
  <div>
    <div v-if="expenses.length > 0">
      <div class="np-table">
        <div class="np-table-heading">Name</div>
        <div class="np-table-heading">Beschreibung</div>
        <div class="np-table-heading">Betrag</div>
      </div>

      <div v-for="(expense, expenseIndex) in expenses" :key="expenseIndex">
        <AreYouSureExecute
          class="np-table"
          @acceptDecision="deleteItem(expense)"
          acceptText="Ausgabe entfernen"
          declineText="abbrechen"
        >
          <span>{{ expense.name }}</span>
          <span>{{ expense.subject }}</span>
          <span>{{ Number(expense.amount).toFixed(2) }}</span>
        </AreYouSureExecute>
      </div>

      <div class="np-table">
        <div class="np-table-heading">Gesamt</div>
        <div class="np-table-heading"></div>
        <div class="np-table-heading">{{ totalListSum }}</div>
      </div>
    </div>

    <div v-else>Du hast noch keine Ausgaben eingetragen</div>
  </div>
</template>

<script>
import AreYouSureExecute from './AreYouSureExecute';
import { db } from '../main';

export default {
  components: {
    AreYouSureExecute
  },
  props: {
    expenses: { type: Array, default: [] }
  },
  computed: {
    totalListSum: function() {
      let total = 0;
      this.expenses.forEach(expense => {
        if (expense.amount) {
          total += Number(expense.amount);
        }
      });
      return total.toFixed(2);
    }
  },
  methods: {
    deleteItem(item) {
      const itemKey = item['.key'];
      const itemRef = db.doc(this.$route.path).collection('expenses').doc(itemKey);
      console.log(itemRef);
      itemRef
        .delete()
        .then(() => {
          console.log('deleted', item);
        })
        .catch(err => {
          console.error('error deleting', item);
          return;
        });
    }
  }
};
</script>

<style>
.np-table {
  border-radius: 5px;
  padding: 0.4rem 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.np-table-heading {
  padding-top: 0.8rem;
  font-weight: bold;
}
</style>
